const express = require('express')

const router = express.Router();

const bcrypt = require("bcryptjs");

// Bcrypt is a widely used hashing algorithm and a Node.js module that helps developers securely store and manage passwords.
// It is designed to be slow and computationally intensive, which makes it resistant to brute-force and dictionary attacks. 
const jwt = require("jsonwebtoken")

const Users = require("./auth-model")




router.post('/register', (req, res) => {

    let user = req.body;
    console.log("Request body", req.body)
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;
    console.log(user, "user data")
    Users.add(user)
        .then(saved => {
            res.status(201).json({saved, message: "account created"})
        
            
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ message: "failed creating account. Make sure to have all the required fields and that the username and email is unique "})
        })

})



router.post('/login', (req, res) => {

    let { username, password } = req.body;
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
        
          const token = signToken(user);
  
        
          res.status(200).json({
            token, 
            message: `Welcome ${user.username}!`,
            user_id: user.id
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: "failed finding account with that username "})
      });
  
  });
  


function signToken(user) {
    const payload = {
      username: user.username,
      
    };
  
    const secret = process.env.JWT_SECRET || "key";
  
    const options = {
      expiresIn: "1d",
    };
  
    return jwt.sign(payload, secret, options); 
  }


  module.exports = router