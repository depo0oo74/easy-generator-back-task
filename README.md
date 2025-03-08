# Easy Generator backend task Project

This is a project built with NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Development Mode](#development-mode)
  - [Watch Mode](#watch-mode)
  - [Production Mode](#production-mode)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Nest CLI](https://docs.nestjs.com/cli/overview) (optional but recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:depo0oo74/easy-generator-back-task.git

2. Navigate to the project folder

  cd nestjs-example-project

3. Install dependencies

  npm install



### Running the application

1. Development Mode

  npm run start

2. Watch Mode

  npm run start:dev

2. Production Mode

  npm run build

### Project structure
project/
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   ├── main.ts
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   └── dto/
│   │         └── login.dto.ts
|   |         └── signup.dto.ts
│   ├── users/
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   └── schemas/
│   │         └── user.schema.ts
│   └── shared/
│       └── middleware/
│           └── logger.middleware.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .env
├── .eslintrc.js
├── .prettierrc
├── nest-cli.json
├── package.json
├── tsconfig.json
└── README.md

### API Documentation

example: http://localhost:your-port/api
default: http://localhost:5000/api