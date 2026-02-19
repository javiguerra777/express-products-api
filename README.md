# Express.js Products API

## About The Project
This project was built with Node and Express.js and demonstrates how to integrate MongoDB and Cloudinary to store data in a database and files in cloud storage

### Built With
- Node.js
- Express.js
- MongoDB
- Cloudinary

## Getting Started
To be able to run this project you will need to have Node.js and NPM installed on your system, you will need to create a MongoDB atlas account, and a Cloudinary account

### Prerequisites
You will need to install Node.js, to accomplish this go to [Install Node](https://nodejs.org/en/download). On this site make sure to follow the directions to install Node.js on your operating system.

You will need to create a MongoDB atlas account to do so go to this URL [MongoDB Atlas Sign up](https://www.mongodb.com/cloud/atlas/register). After making an account you will need to create a new cluster, and create a new database user to be able to access the account, make sure to save the username and password.

You will need to create a Cloudinary account, go to [Cloudinary Account Registration](https://cloudinary.com/users/register_free). After making an account you should be able to find your Cloudinary Cloud Name, API Key, and Secret Key in your settings.

### Installation
To be able to install this project follow the directions to be able to clone the repository, install NPM packages, and configure `.env` file properly.
1. Fork the repository, to accomplish this, look for the the fork button near the top of the webpage, click on the Fork button to fork a copy of this repository to your own GitHub account.

2. Clone the repo
```sh
git clone https://github.com/username/repository-url.git
```
3. Install NPM Packages
```sh
npm install
```
4. Create a `.env` file and enter appropriate environment variables
```env
MONGODB_URI="mongodb+srv://user:password@mongodbcluster.fvnrt.mongodb.net/databasename?appName=ClusterName"
CLOUDINARY_CLOUD_NAME="cloud name"
CLOUDINARY_API_KEY="api key"
CLOUDINARY_API_SECRET="secret key"
```

### Scripts

Starting Server in Production Mode
```sh
npm start
```

Starting Server in Development Mode
```sh
npm run dev
```

Seeding Database with test data
```sh
npm run seedDatabase
```