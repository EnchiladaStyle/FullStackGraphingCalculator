const mysql = require('mysql');

function save_function(req, res){

    console.log(process.env.DB_PASSWORD)
    

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
    
    const userId = req.userData.userId;
    
    
    let data = {yValPos: req.body.yValPos, yValNeg: req.body.yValNeg, xValPos: req.body.xValPos, xValNeg: req.body.xValNeg, person_id: userId};
    let sql = 'INSERT INTO valueset SET ?';
    let query = db.query(sql, data, (err, response) => {
        if (err) throw err;
        console.log(response);
        res.send('function added');
    })

}





function delete_function(req, res){

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

    const userId = req.userData.userId;
    
    let data = {};
    let sql = `DELETE FROM valueset WHERE person_id = ${userId};`;
    let query = db.query(sql, data, (err, response) => {
        if (err) throw err;
        console.log(response);
        res.json({
            message: 'function deleted'
        });
    })


}

module.exports = {
    save_function: save_function,
    delete_function: delete_function
}