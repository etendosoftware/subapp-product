const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const configPath = path.resolve(__dirname, './etendo.config.json');
if (!fs.existsSync(configPath)) {
  console.error(`The configuration file ${configPath} does not exist. Please create the file and define the output path.`);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const outputPath = config.outputPath;

if (!outputPath) {
  console.error(`The configuration file ${configPath} does not contain an outputPath.`);
  process.exit(1);
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  const parsedUrl = url.parse(req.url);
  const sanitizedPath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(outputPath, sanitizedPath);

  if (req.method === 'GET') {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).slice(1);
      const map = {
        html: 'text/html',
        js: 'text/javascript',
        css: 'text/css',
        json: 'application/json',
        txt: 'text/plain',
      };
      const contentType = map[ext] || 'application/octet-stream';

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } else if (req.method === 'POST' && sanitizedPath === '/log') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log('POST Payload:', body);
      fs.appendFile('debug.log', `${new Date().toISOString()} - ${body}\n`, (err) => {
        if (err) {
          console.error('Failed to write to debug.log:', err);
        }
      });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Payload received and logged.' }));
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
