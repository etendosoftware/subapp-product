const logger = (key: string, message: string) => {
  try {
    fetch('http://localhost:3000/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key, message }),
    });
  } catch (error) {}
};

export default logger;
