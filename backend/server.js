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
    const sql = "INSERT INTO loginRegister (`name`,`lastname`,`email`,`password`,`dateb`,`gender`,`phonenumber`)  VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.lastname,
        req.body.email,
        req.body.password,
        req.body.dateb,  
        req.body.gender,
        req.body.phonenumber
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
    const sql = "INSERT INTO staffi (`name`, `email`, `staff_number`, `gender`, `phone_number`, `password`, `created_at`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.staff_number,
        req.body.gender,
        req.body.phonenumber, 
        req.body.password,
        new Date() 
    ];
    
    db.query(sql, values, (err, data) => { 
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/Userslogin', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `staff_number`, `gender`, `phone_number`, `password`, `created_at`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.staff_number,
        req.body.gender,
        req.body.phonenumber, 
        req.body.password,
        new Date() 
    ];
    
    db.query(sql, values, (err, data) => { 
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})




app.post('/getStaff', (req, res) => {
    const sql = "SELECT * FROM staffi";


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
    const sql = "SELECT * FROM login";


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

app.delete("/deleteStaff/:id", (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM staffi WHERE id = ?";
  
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal server error" });
        }

        return res.status(200).json({ message: "User deleted successfully" });
    });
});




app.delete("/deleteUsers/:id", (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM login WHERE id = ?";
  
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal server error" });
        }

        return res.status(200).json({ message: "User deleted successfully" });
    });
});


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

    app.get('/',(req,res)=>{
        const sql ="SELECT * FROM `contact`";
        db.query(sql,(err,result)=>{
            if(err) return res.json({Message: "Error inside server "});
            return res.json(result);
        })
    })