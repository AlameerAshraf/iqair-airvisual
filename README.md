# iqair

This project is a NestJS application for managing air quality information. It provides APIs to store and retrieve air quality data.

## Features

- Create and save air quality information
- Retrieve air quality information

## Prerequisites

Before running the application, ensure that the following software is installed on your machine:

- Node.js (v12 or above)
- npm (v6 or above)

## Getting Started

Follow the steps below to set up and run the "iqair" application on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/iqair.git
   

2. Install dependencies:

   ```bash
    cd iqair
    npm install

Follow the steps below to set up and run the "iqair" application on your local machine:

3. Configure environment variables:
   - Create a `.env` file in the root directory of the project.
   - Set the required environment variables in the `.env` file. (e.g., MongoDB connection string)

   Example `.env` file content:


4. Build the application:

   ```bash
   npm run build

5. Start the application:

   ```bash
   npm run start
   
   
 ## API Documentation 
 
  The application provides API endpoints for managing air quality information. You can find the detailed API documentation at   http://localhost:3000/api.
  
  
  ## API Documentation

The application provides API endpoints for managing air quality information. You can find the detailed API documentation at `http://localhost:3000/api`.

Use tools like Postman or cURL to interact with the API endpoints and perform CRUD operations on the air quality information.

The API endpoints available in the application are as follows:

- `GET /v1/air-quality/{lat}/{lon}`: Get the air quality for a specific machine


Ensure that the application is running locally before making API requests.


  
 ## Testing 
 
 To run the unit tests for the application, execute the following command:
 
    ```bash
    npm run test
