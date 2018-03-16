var express = require('express');
var bodyParser =require('body-parser');
var cors =require('cors');
var app =express();
var mongoose =require('mongoose');
var adminSubjectapi =require('./API/AdminApi/subject')
var PaperSchema =require('./model/paperSchema');
var studentRegister =require('./API/androidApi/studentRegistraion');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://rashansamith88:0771260101@ds115569.mlab.com:15569/aldatabase');
mongoose.connection.on('connected',function(){
    console.log('connected');

});
mongoose.connection.on('error',function(err){
    console.log('error');

});

app.get('/',function(req,res){
    res.send('hii rashan samith');

});

app.use('/api/student/',studentRegister.studentRegister);
app.use('/api/admin/subject/',adminSubjectapi.adminSubjec);

var PORT =process.env.PORT || 8080;

app.listen(PORT,function(){

console.log('server running on port 3000');

});