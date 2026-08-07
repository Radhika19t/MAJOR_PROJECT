# 🌍 WanderLust

A full-stack Airbnb-inspired web application built using the MERN ecosystem (MongoDB, Express.js, Node.js) with EJS as the templating engine. Users can explore, create, edit, and review travel listings with secure authentication and image uploads.

---

## 🚀 Features

- 🔐 User Authentication (Sign Up / Login / Logout)
- 🏡 Create, Edit, and Delete Listings
- 📸 Upload Images using Cloudinary
- ⭐ Add and Delete Reviews
- 👤 Listing Ownership Authorization
- 💬 Flash Messages
- 🔒 Password Hashing with Passport.js
- 📱 Responsive UI using Bootstrap
- ☁️ MongoDB Atlas Database
- 🌐 Deployed on Render

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- Passport.js
- Passport Local
- Passport Local Mongoose

### Image Storage
- Cloudinary
- Multer
- Multer Storage Cloudinary

### Other Packages
- Express Session
- Connect Flash
- Method Override
- Dotenv

---

## 📂 Project Structure

```
MAJOR_PROJECT
│
├── cloudConfig/
├── controllers/
├── init_db/
├── middleware.js
├── models/
├── public/
├── routes/
├── utils/
├── views/
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/WanderLust.git
```

Go to project folder

```bash
cd WanderLust
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key

CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret
```

Start the application

```bash
npm start
```

Open

```
http://localhost:8080/listings
```

---

## 📸 Screenshots

Add screenshots of

- Home Page
- Listing Details
- Login
- Signup
- Create Listing
- Review Section

---

## 📌 Future Improvements

- Interactive Maps
- Search Functionality
- Filters
- Wishlist
- Booking System
- Payment Integration
- User Profile
- Image Gallery

---

## 📚 What I Learned

- MVC Architecture
- REST APIs
- Authentication & Authorization
- Session Management
- CRUD Operations
- MongoDB Relationships
- Cloudinary Integration
- File Upload using Multer
- Deployment using Render

---

## 👩‍💻 Author

**Radhika Thakare**

GitHub: https://github.com/YOUR_GITHUB_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
