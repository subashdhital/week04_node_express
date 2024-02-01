const express = require('express');
const app = express(); 
const SERVER_PORT = process.env.PORT || 3000;

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1> Hello World </h1>');
})

//http://localhost:3000/name
app.get("/name", (req, res) => {
    res.send("Hello, my name is Subash Dhital");
} )

//http://localhost:3000/course/web700
app.get("/course/web700", (req, res) => {
    res.send("web programming");
} )

//http://localhost:3000/about
app.get("/about", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/views/about.html");
} )

app.listen(SERVER_PORT, () => {
    console.log(`Server is running at http://localhost:${SERVER_PORT}`);
})