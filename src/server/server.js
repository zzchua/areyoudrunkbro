var express = require('express');
var path = require('path');
var cors = require('cors');


// var fs = require('fs');
// var https = require('https');

// var privateKey = fs.readFileSync('public/key.pem');
// var privateCert = fs.readFileSync('public/key-cert.pem');
var app = express();



// var credentials = { key: privateKey, cert: privateCert};

// console.log(path.join(__dirname, '../../keycloak.js'));

app.use(cors());
app.use(express.static(path.join(__dirname, '../../dist')));



// var server = https.createServer(credentials, app)

app.listen(8082, 'localhost', function() {
    console.log('server started');
})


// nginix on AWS serves on port 8081
// server.listen(8081, "localhost", function() {
//     console.log("https server started");
// })