const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    }
}

const bcrypt = require('bcryptjs');

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body;
      // console.log(users);
      
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password, users[i].password)) {
          
          return res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body) 
        const {password,username,email,firstName,lastName} = req.body;       
        const salt = bcrypt.genSaltSync(10);        
        //The hash represents the actual encryption of our password.
        const passHash = bcrypt.hashSync(password,salt);
        console.log(password);
        let userObj = {          
          username: username,
          email,
          firstName,
          lastName,
          password: passHash, //This is the same as pinHash: pinHash.
      }
      console.log(userObj);
      users.push(userObj);
      console.log(users)
      let userToReturn = {...userObj};
      delete userToReturn.password;
        res.status(200).send(userToReturn)
    }
}