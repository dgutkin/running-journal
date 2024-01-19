const express = require("express");
// import data model for User
const bcrypt = require("bcrypt");

const app = express();

// create user route
app.post("/create-user", function (req, res) {

    try {
  
        const { email, password } = req.body;
  
        // check if the user is already in use with mongoose
        let userExists = false;

        if (userExists) {
        res.status(401).send("Email is already in use");
        return;
        }

        // Define salt rounds
        const saltRounds = 10;
        
        // Hash password
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) throw new Error("Internal Server Error");

        // Create a new user
        // let user = new User({
        //   email,
        //   password: hash,
        // });

        // Save user to database
        // user.save().then(() => {
        //   res.json({ message: "User created successfully", user });
            }
        );

        res.status(201).send("User created");

  
    } catch (err) {

      return res.status(401).send(err.message);
      
    }
    
});

// login user route
app.post("/login", function (req, res) {
    
    try {
        // Extract email and password from the req.body object
        const { email, password } = req.body;
     
        // Check if user exists in database
        // let user = await User.findOne({ email });
        let user = null;
     
        if (!user) {
          return res.status(401).json({ message: "Invalid Credentials" });
        }
     
        // Compare passwords
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            return res.status(200).json({ message: "User Logged in Successfully" });
          }
          
          console.log(err);
          return res.status(401).json({ message: "Invalid Credentials" });
        });
      } catch (error) {
        res.status(401).send(err.message);
      }

});

// route for getting a user's profile data
// route for updating a user's profile data
// route for getting a user's journal list
  