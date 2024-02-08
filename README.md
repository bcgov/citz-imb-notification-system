# Project Name

Fullstack Docker template.

## Technologies Used

### Overall

- Docker

### Frontend

- **Framework/Library**:

  - React

- **Development Tools**:

  - Vite
  - TypeScript
  - ESLint
  - Prettier
  - Docker

### Backend

- **Core Technologies**:

  - Express.js
  - Cors
  - Pg

- **Development Tools**:

  - Nodemon
  - Docker

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

List things you need to install the software and how to install them.

### Installing

A step by step series of examples that tell you how to get a development environment running.

#### Step 1: Clone the Repository

To get started, clone the repository to your local machine.

```bash
git clone [URL to the repository]
```

#### Step 2: Navigate to the root directory of the project

```bash
cd [repository name]
```

#### Step 3: Copy the .env.template file and rename it to .env.

Edit .env file with your environment-specific settings. Do the same for src/frontend and src/backend

```bash
cp .env.template .env
```

#### Step 4: Rename pgadmin/servers.json.template to servers.json.template

Edit servers.json file with your environment-specific settings

```bash
cp servers.json.template servers.json
```

### Configuring Docker

1. Navigate to the compose.yaml file.

2. Make any required changes in the compose.yaml file to suit your needs.

### Running the Project

The project uses Docker to simplify development and deployment. Below are some of the scripts available in package.json to run the project.

- To install all necessary packages:

```bash
npm run init
```

- To build and start the Docker images:

```bash
npm run up
```

- To stop the Docker images:

```bash
npm run down
```

- To stop and remove the Docker images:

```bash
npm run prune
```

- To stop, remove, rebuild and start the Docker images:

```bash
npm run rebuild
```

For more Docker-related commands, refer to the `scripts` section in the `package.json`.

### Conclusion

This boilerplate is designed to give you a head start in your projects. Feel free to modify and adapt it as per your requirements.
