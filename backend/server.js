const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`)  VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values], (err,data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ?  AND  `password` = ?";
   
     
    db.query(sql,[req.body.email,  req.body.password], (err,data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Succes");


        } else {
            return res.json("faile");
        }
    })
})

app.post('/Alogin', (req, res) => {
    const sql = "SELECT * FROM admin WHERE `email` = ?  AND  `password` = ?";
   
     
    db.query(sql,[req.body.email,  req.body.password], (err,data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Succes");


        } else {
            return res.json("faile");
        }
    })
})
app.post('/Stafflogin', (req, res) => {
    const sql = "INSERT INTO staff (`name`,`email`,`password`)  VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values], (err,data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/getStaff', (req, res) => {
    const sql = "SELECT Id, name, email FROM staff";


    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("faile");
        }
    })
})




app.post('/getUsers', (req, res) => {
    const sql = "SELECT Id, name, email FROM login";


    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("faile");
        }
    })
})


app.listen(8080, () => {
    console.log("Server is runninf");
    });