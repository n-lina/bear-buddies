var express = require('express');
var admin = require("../admin");

// Add the Firebase products that you want to use
require("firebase/auth");

var router = express.Router();

const createUser = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName
  } = req.body;

  try {
    const user = await admin.auth().createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`
    });
  
    return res.send(user);
  }
  catch (error) {
    return res.status(400).send("Cannot create a user");
  }
}

router.post('/signup', createUser);

module.exports = router;
module.exports = createUser;