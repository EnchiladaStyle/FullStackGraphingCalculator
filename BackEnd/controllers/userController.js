const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function sign_in(req, res){

    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'apple123',
        database: 'graphingDB'
    });
    
    db.connect((err) => {
        if (err){
            throw err;
        }
        console.log('mysql connected!');
    })

    const credentials = {
        userName: req.body.user_name,
        password: req.body.password
    }


    let data = {};
    let sql = `SELECT * from person WHERE username = '${credentials.userName}';`;
    let query = db.query(sql, data, (err, user) => {
    if (err) throw err;
    if (user[0]){

        bcrypt.compare(credentials.password, user[0].password, function(error, result){
            if(result){
                const accessToken = jwt.sign({
                    userName: credentials.userName,
                    userId: user[0].person_id
                }, 'web_token_key', function(err, accessToken){
                    return res.status(201).json({
                        message: 'authenticated',
                        token: accessToken
                    })
                });
            }
            else{
                res.status(401).json({
                    message: 'invalid credentials'
                })
            }
        });

    }
    else{
        res.json({
            message: 'invalid credentials'
        })
    }
    })
}



function sign_up(req, res){
    
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'apple123',
        database: 'graphingDB'
    });
    
    db.connect((err) => {
        if (err){
            throw err;
        }
        console.log('mysql connected!');
    })

    

    let data = {};
    let sql = `SELECT * from person WHERE username = '${req.body.user_name}';`;
    let query = db.query(sql, data, (err, user) => {
    if (err) throw err;
    if (user[0]){

        res.json({
            message: 'username unavailable'
        })

    }
    else{
        
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(req.body.password, salt, function(err, hash){
                const credentials = {
                    userName: req.body.user_name,
                    password: hash
                }
    
                let data = {username: credentials.userName, password: credentials.password};
                let sql = 'INSERT INTO person SET ?';
                let query = db.query(sql, data, (err, response) => {
                if (err) throw err;
                console.log(response);
                res.send('user added');
                })
    
    
            })
        })
    }
    })   
    
}

module.exports = {
    sign_up: sign_up,
    sign_in: sign_in
}