# User Submission and Admin Dashboard - MERN App

This project is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can submit their name, social media handles, and upload multiple images. The images are stored in Cloudinary, and an admin dashboard allows viewing the list of all users and their submitted data.

## Features

- **User Submission Form**: Allows users to submit their name, social media handles, and multiple images.
- **Image Upload**: Images are uploaded to Cloudinary and the URLs are saved in the MongoDB database.
- **Admin Dashboard**: Displays the list of users and their associated data, including social media handles and image URLs.

## Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Storage**: Cloudinary

## Hosting
(Add your hosting details here if applicable, e.g., Heroku, Netlify, Vercel)

## Installation and Setup

### Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/) account (for image storage)

### Steps

#### 1. Clone the repository:

```bash
git clone work
cd work
```
#### 2. Install dependencies for both the backend and frontend:
for the backend
```bash
cd backend
npm install
```
for the frontend
```bash
cd frontend
npm install
```

#### 3. Create a .env file in the server directory with the following details:
```bash
PORT=5000
MONGO_URI=your_mongo_db_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
#### 4. Run the application:
```bash
npm run dev

