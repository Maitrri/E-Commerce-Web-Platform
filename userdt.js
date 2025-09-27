const express=require('express');
const router=express.Router();
var mysql = require('mysql');

router.get('/msg', (err,res)=>{
    console.log('this message')
    res.send()
    })
   
router.post('order', (req,res)=>{
    console.log('Trying to register')

    const fname = req.body.fname;
    const email = req.body.email;
    const city = req.body.city;
    const address = req.body.address;
    const zip = req.body.zip;
    const country = req.body.country;

    const sql = "INSERT INTO userr VALUES ?";
    const values = [['null', fname, email, city, address, zip, country]];
    getConn().query(sql,[values],(err, results, fields)=>{


        if(err){
            console.log('Failed', err);
            res.sendStatus(500)
            return;
        }

        console.log('Inserted', results.insertId)
        res.end();
    })

    res.end()

})

function getConn(){
    return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "maitrri27",
    database: "MaitrrriofDatabase"
    })

}

module.exports = router;