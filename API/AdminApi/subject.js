var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var Subject =require('../../model/subjectSchema');

router.post('/addNewSubject',function(req,res){
    console.log('in subject');

    var subject =req.body.subject;
    var stream  =req.body.stream;
    console.log(subject);
    console.log(stream);

    var newSubject =new Subject();

    

    if(subject=="PHYSICS" || subject =="CHEMISTY"){
        newSubject.subjectName =subject;
        newSubject.subStreamOne ="COMBINED MATHS";
        newSubject.subStreamTwo ="BIO SCIENCE";
        newSubject.streame =stream;

        addNewSubjectFunction(newSubject,res);


    }else if(subject =="PURE MATHS" || subject =="APPLIED MATHS"){

        
        newSubject.subjectName =subject;
        newSubject.subStreamOne ="COMBINED MATHS";
        newSubject.streame = stream;
        addNewSubjectFunction(newSubject,res);
    
    } else if(subject =="BIO SCIENCE"){

        
        newSubject.subjectName =subject;
        newSubject.subStreamOne ="BIO SCIENCE";
        newSubject.stream =stream;
        addNewSubjectFunction(newSubject,res);


    } else{
             
        newSubject.subjectName =subject;
        newSubject.stream =stream;
        addNewSubjectFunction(newSubject,res);
    }


    




});

var addNewSubjectFunction =function(newSubject,res){

    newSubject.save(function(err,addedSubject){
        if(err){
            res.statusCode =500;
            res.json({
                    code:500,
                    message:'internal server error'
            });
        }else if(!addedSubject){

            res.statusCode =200;
            res.json({
                code:200,
                message:"subject is not added"

            });

        }else if(addedSubject){

            res.statusCode =200;
            res.json({
                code:200,
                message:"subject is successfully added"

            });

        }



        


});

}






module.exports.adminSubjec =router;