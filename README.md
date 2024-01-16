# Estrrado-assignment

This project provides a student management system using Node.js, Express, and MongoDB.

*Features=>
Student registration
Student login 

*Technologies Used=>
Node.js
Express.js
MongoDB

*Getting Started=>
Node.js and npm installed
MongoDB installed and running

*Installation=>
Clone the repository: mkdir Machine test git clone https://github.com/sonupk/Estrrado-assignment.git
cd Estrrado-assignment

*Install dependencies: using npm install
express
mongoose
Body-parser
uuid(provides a more reliable way to generate unique identifiers)

PORT=3000 MONGODB_URI=mongodb://localhost:27017/estrrado-DB 

Start the server:npx nodemon src/index.js The server will run on http://localhost:3000 by default.

*Test the APIs using Postman tool=>
API Endpoints POST/register: Register a new student data. 
POST/login: Login with an existing student. 
GET/registration-list: retrieve a student of list from database.