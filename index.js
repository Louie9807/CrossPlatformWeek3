
var express = require('express')
var appServer = express()
 
var path = require('path');

//assuming app is express object
appServer.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/ClientUI/test.html'));
})

//assuming app is express object
appServer.get('/index.js', function (req, res) {
    res.sendFile(path.join(__dirname+'/ClientUI/index.js'));
})
 
//ValidateUser
appServer.get('/validateUser', function (req, res) {
    //Get Username
    var userFName = req.query.firstname;
    var userLName = req.query.lastname;

    //Get Password
    var password = req.query.password;

    //Validation
    if (userFName == "Louie" && userLName == "Tham" && password == "6314")
    {
        res.send("Successful")
    }
    else{
        res.send("Failed")
    }

    res.send({ 'test': 'Test' });
  })

appServer.listen(3000)