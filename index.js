const express = require('express');
const mysql = require('mysql');


const app = express();

//Creating a connection to the sql db
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'foxy',
    database: 'shoestore'
});

//Connect
db.connect((err) => {
    if (err){
        throw err;
    }

    console.log("Connection to the db was succesfull");
});


app.use(express.static('./'));

app.listen('5000', () => {
    console.log('Server started on port 5000');
});

app.get('/Data/:n', (request, response)  => {

    let n = request.params.n;

    console.log(n);

    switch (parseInt(n)){
        case 0:
            console.log("All");
            let sql0 = `SELECT * FROM product`;


            let query0 = db.query(sql, (err, results) => {
                if (err) throw err;
                console.log(results);
                response.json(results);
            })
        case 1:
            console.log("Reg Shoe");
            let sql1 = `SELECT * FROM product WHERE category="Regular Shoe"`;


            let query1 = db.query(sql, (err, results) => {
                if (err) throw err;
                console.log(results);
                response.json(results);
            })
        case 2:
            console.log("Reg Shoe");
            let sql2 = `SELECT * FROM product WHERE category="Boots"`;


            let query2 = db.query(sql, (err, results) => {
                if (err) throw err;
                console.log(results);
                response.json(results);
            })
    }

});