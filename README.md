<h1 align="center">
 🏫 School Management System using MERN Stack
</h1>
<p align="center">
MongoDB, ExpressJS, ReactJS and NodeJS
</p>
<p align="center">
:octocat:
</p>

> A simple full stack web applicatoin built using the MERN stack to verify the usage and behavior of the MERN stack.

## Clone the repository

```terminal
$ git clone https://github.com/TerribleCodes/School-Management-System.git
```

## Project structure

      SCHOOL_MANAGEMENT_SYSTEM
      ├── backend
      │   ├── node_modules
      │   ├── models
      │   └── routes
      └── frontend
         │   ├── node_modules
         │   ├── public
         └── └── src
              └── components

# Usage (run fullstack app on your machine)

## Prerequisites

- [NodeJS](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/package-manager/)

_Notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other_

## Client-side usage

### Client-side environmental variables

| Name   | Description | Default Value |
| ------ | ----------- | ------------- |
| `null` | `null`      | `null`        |

### Run the client side

```terminal
$ cd frontend          // go to client folder
$ npm i    // npm install packages
$ npm run start        // run it locally
```

## Server-side usage

### Server-side environmental variables

| Name        | Description                                                                                             | Default Value |
| ----------- | ------------------------------------------------------------------------------------------------------- | ------------- |
| PORT        | URL to the locally running instance                                                                     | 3000          |
| MONGODB_URI | [MongoDB Atlas Cluster Connection String](https://www.mongodb.com/docs/guides/atlas/connection-string/) | -             |

### Run the client side

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
```

# Dependencies (tech-stacks)

| Client-side              | Server-side       |
| ------------------------ | ----------------- |
| axios: ^1.3.4            | cors: ^2.8.5      |
| react: ^18.2.0           | dotenv: ^16.0.3   |
| react-dom: ^18.2.0       | express: ^4.18.2  |
| react-router-dom: ^6.9.0 | mongoose: ^7.0.1" |
| react-scripts: 5.0.1     |                   |
| web-vitals: ^2.1.4       |                   |

---
