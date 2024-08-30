
## Overview

The `etendo-subapp-data-template-typescript` package is a template designed for generating subapplications for Etendo Mobile. This example provides the basic structure required for a subapplication, allowing developers to quickly set up and extend functionalities within the Etendo Mobile ecosystem.

## Publishing the `etendo-subapp-data-template-typescript` Library on NPM

To publish the `etendo-subapp-data-template-typescript` library on NPM, follow these steps:

1. **Ensure NPM Authentication**:
   - Verify that you are logged in to NPM:
     ```bash
     npm whoami
     ```
   - If not logged in, execute:
     ```bash
     npm login
     ```
   - Provide your NPM username, password, and email as prompted.

2. **Navigate to Your Project Directory**:
   - Open your terminal and navigate to the root directory of the `etendo-subapp-data-template-typescript` library:
     ```bash
     cd path/to/etendo-subapp-data-template-typescript
     ```

3. **Update `package.json` (Optional)**:
   - Ensure the `version` field in your `package.json` is updated to reflect the new version you intend to publish:
     
     ```json
     {
       "name": "etendo-subapp-data-template-typescript",
       "version": "1.0.1",
       ...
     }
     ```

4. **Run the Publish Command**:
   - Execute the following command to publish your library under the `latest` tag:
     ```bash
     yarn publish --tag latest
     ```

5. **Verify the Publication**:
   - Once the command completes, verify that the library has been published by checking your package on the NPM website:
     ```bash
     npm view etendo-subapp-data-template-typescript
     ```
   - Ensure that the new version is listed under the `latest` tag.