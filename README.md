# DeepInfluence-Backend


This repository contains the Node.js backend application for DeepInfluence project.
## Project Overview
- TASK1 : The goal of this task is to prepare a Docker container for the Node.js backend application.
## Prerequisites
Before you begin, ensure you have the following installed on your local machine:

- Node.js (version >= 14.0.0)
- npm (Node Package Manager)
- MongoDB (make sure it's running locally or accessible)
- Docker Desktop (or Docker Engine if using Linux) installed


## Installation

1. Clone the repository from GitHub:



```bash
git clone https://github.com/SmartGalaxy/DEPPINFLUENCEBACKEND.git
```
2.Navigate into the project directory:

```bash
cd backend
```
3.Install dependencies:

```bash
npm install
```
4.Set up environment variables:
- Create a .env file in the root directory.
- Define necessary environment variables (e.g., PORT, MONGO_URI, MONGO_INITDB_ROOT_USERNAME,MONGO_INITDB_ROOT_PASSWORD).
Example .env file content:

```plaintext
PORT=8000
MONGO_URI=mongodb+srv:your_mongo_uri
MONGO_INITDB_ROOT_USERNAME=your_username
MONGO_INITDB_ROOT_PASSWORD=your_password

```


## Running with Docker

1. Build and start the containers:


```bash
docker-compose up --build

```
- This command will build the Docker images defined in docker-compose.yaml and start the containers.
2. The Node.js backend will be accessible at http://localhost:8000.

## Accessing MongoDB

- MongoDB is accessible internally within the Docker network at mongodb://mongodb:27017.



