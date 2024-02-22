const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { User } = require("../models.js");

// create user route
router.post("/add-user", async (req, res) => {

    try {
  
        const { name, email, password } = req.body;

        // Simple validation, check if both email and password are provided
        if (!name || !email || !password) {
          return res.status(400).json({ error: 'Name, email and password are required.' });
        }
  
        // check if the user is already in use with mongoose
        let userExists = await User.findOne({ email });

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
          let user = new User({
            name,
            email,
            password: hash,
          });

          // Save user to database
          user.save()
            .then(() => {
              res.status(201).send("User created.");
            });
        
        });
  
    } catch (err) {

      return res.status(401).send(err.message);
      
    }
    
});

// login user route
// router.post("/login", async (req, res) => {
    
//     try {

//       // Extract email and password from the req.body object
//       const { email, password } = req.body;
    
//       // Check if user exists in database
//       let user = await User.findOne({ email });
    
//       if (!user) {
//         return res.status(401).json({ message: "Invalid Credentials" });
//       }
    
//       // Compare passwords
//       bcrypt.compare(password, user.password, (err, result) => {

//         if (result) {
//           return res.status(200).json({ message: "User Logged in Successfully" });
//         }
        
//         console.log(err);
//         return res.status(401).json({ message: "Invalid Credentials" });

//       });

//     } catch (error) {

//       res.status(401).send(err.message);
      
//     }

// });

// route for getting a user's profile data
// route for updating a user's profile data
// route for getting a user's journal list
  
module.exports = router;
