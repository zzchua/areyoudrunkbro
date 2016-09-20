var express = require('express');
var path = require('path');

var app = express();


// app.use(cors());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));



app.listen(app.env.PORT || 8080, function() {
    console.log('server started');
});