const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(4000, () => console.log("Server running on port 4000"));

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    
    console.log('in the "/api/users" endpoint callback');
    res.status(200).send(friends);
  });

  app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    console.log('in the "/weather/:temperature" endpoint callback');
    console.log(temperature);
    res.status(200).send(phrase);
  });

