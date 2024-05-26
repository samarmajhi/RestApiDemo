# Student Management API

This is a simple API for managing student data. It's built with Fastify and uses the `fastify-multipart` plugin for handling file uploads.
This simple API also has the configuraion for supporting ES6 with babel and bundling the resouce files with webpack.config file. 

## Features

- Get all students
- Add a new student
- Upload an image using fastify-multipart 

## Endpoints

- `GET /students/getStudents`: Returns all students.
- `POST /students/postStudents`: Adds a new student. The student data should be sent in the request body as JSON.
- `PUT /uploadImage`: Uploads an image. The image file should be sent in the 'image' field of the request body.

## Setup

1. Clone the repository: `git clone <repository-url>`
2. Navigate into the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`
4. Start the server: `npm start`

## Usage

You can use a tool like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to send requests to the API.

For example, to add a new student, you would send a POST request to `http://localhost:3000/students/postStudents` with the student data in the request body as JSON.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

