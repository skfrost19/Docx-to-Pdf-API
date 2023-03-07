# Docx to PDF Converter API
This API allows you to convert Docx files to PDF format using the docx-pdf NPM library.

## Installation
* Clone this repository to your local machine.
* Navigate to the project directory in your terminal and run npm * * * install to install the project dependencies.

## Usage
* Start the server by running <b> `npm run start` </b> in your terminal.
* Navigate to <b>`http://localhost:3000`</b> in your web browser to access the API's web interface.
* Select a Docx file to upload and click the "Convert to PDF" button to initiate the conversion process.
* If the conversion is successful, the server will respond with the converted PDF file and your browser will prompt you to download it.
* If there is an error during the conversion process, an error message will be displayed on the web interface.
* You can also use this API programmatically by sending a POST request to the /convert endpoint with a multipart/form-data body containing the * Docx file to be converted. The server will respond with the converted PDF file as a application/pdf response.

## Configuration
The API is configured to use the default settings for the docx-pdf library, which should work for most use cases. However, you can modify the settings by updating the options object in the convertDocxToPdf function in the converter.js file. Please refer to the docx-pdf documentation for more information on the available options.

## Dependencies
This API relies on the following NPM packages:

express: for handling HTTP requests and responses
docx-pdf: for converting Docx files to PDF format
morgan: for logging HTTP requests and responses
ejs: for rendering HTML templates

## License
This project is licensed under the <a href = "LICENSE" > MIT </a> License.
