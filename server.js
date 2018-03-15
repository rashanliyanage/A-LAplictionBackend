var express = require('express');
var bodyParser =require('body-parser');
var cors =require('cors');
var app =express();
var mongoose =require('mongoose');
var PaperSchema =require('./model/paperSchema');
var studentRegister =require('./API/androidApi/studentRegistraion');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/ALDATABASE');
mongoose.connection.on('connected',function(){
    console.log('connected');

});
mongoose.connection.on('error',function(err){
    console.log('error');

});



app.use('/api/student/',studentRegister.studentRegister);

app.listen(3000,function(){

console.log('server running on port 3000');

});