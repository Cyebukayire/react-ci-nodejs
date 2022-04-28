const express = require("express");

const PORT = process.env.PORT || 3333;

const app = express();

app.get("/", (req, res) => {
    res.json({message: 'Welcome to the server'})
})

app.get("/api", (req, res) => {
    res.json({message: 'Hello From Server'})
})

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });
  
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})
