const jwt = require('jsonwebtoken');

function checkAuth(req, res, next){

    try{
        console.log(req.headers.authorization)
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, 'web_token_key');
        req.userData = decodedToken; //appends userId and name to the request to be used later
        console.log(req.userData)
        next();
    }
    catch(error){
        return res.status(401).json({
            message: 'unauthorized'
        });
    }

}

module.exports = {
    checkAuth
}