var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const bcrypt = require('bcryptjs');
var Student =require('../../model/studentSchema');


router.post('/studentRegister',function(req,res){
        console.log('in the register api');
        var fullName =req.body.fullName;
        var userName =req.body.username;
        var password =req.body.password;
        var phoneNumber =req.body.phoneNumber;
        var address =req.body.address;
        var province =req.body.province;
        var stream  =req.body.stream;

        var newStudent =Student();
            newStudent.fullName =fullName;
            newStudent.userName =userName;
            newStudent.phoneNumber =phoneNumber;
            newStudent.address =address;
            newStudent.province =province;
            newStudent.stream =stream;

            bcrypt.genSalt(10,function(err,salt){
                bcrypt.hash(password,salt,function(err,hash){
                        if(err){console.log('err')}
                        newStudent.password =hash;
                        Student.findOne({userName:userName},function(err,user){

                                if(err){
                                        console.log('error');
                                }

                                if(user){
                                        res.statusCode =200;
                                        res.json({
                                                code:"201",
                                                message:'user alredy exist'

                                        });


                                }

                                if(!user){
                                        newStudent.save(function(err,user){

                                                        if(err){
                                                               // res.statusCode =500;
                                                                res.json({
                                                                        code:"500",
                                                                        message:'internal server error'

                                                                });

                                                        }else{
                                                                res.statusCode=200;
                                                                res.json({
                                                                        message:'successfully register',
                                                                        code:"200"

                                                                });


                                                        }


                                        });



                                }

                        });
        
        
                });
        
            })

});


router.post('/login',function(req,res){
        console.log('in the login');

        var username =req.body.username;
        var password =req.body.password;

        Student.findOne({userName:username},function(err,student){
                if(err){
                       // res.statusCode =500;
                        res.json({
                                code:"500",
                                message:"internal server error"


                        });

                }
                
                if(!student){
                       // res.statusCode =404;
                        res.json({
                                code:"404",
                                message:"user not found"

                        });

                }else{
                        bcrypt.compare(password,student.password,function(err,isMatch){
                                console.log(isMatch);
                                    if(err){
                                       // res.statusCode =500;
                                        res.json({
                                                code:"500",
                                                message:"internal server error"

                                        });
                                
                                    }
                                     if(!isMatch){
                                        //res.statusCode =505;
                                        res.json({
                                                code:"505",
                                                message:"username or passwor invalide"

                                        });

                                    }else {

                                        res.statusCode =200;
                                        res.json({
                                                code:"200",
                                                message:"login success"

                                        });
                                    }
                                
                                });
                


                }



        });



});

module.exports.studentRegister =router;