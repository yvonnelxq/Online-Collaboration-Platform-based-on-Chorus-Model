
var fs = require('fs')
var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
  res.render('index.html')
  })


  router.get('/form',function(req,res){
  res.render('form.html')
  })

 router.get('/participate',function(req,res){
  res.render('participate.html')
  })

  router.get('/search',function(req,res){
  res.render('search.html')
  })

  router.get('/searchResult',function(req,res){
  res.render('searchResult.html')
  })

  router.get('/record',function(req,res){
  res.render('record.html')
  })

  router.get('/contact',function(req,res){
  res.render('contact.html')
  })

 router.get('/output',function(req,res){
  res.render('output.html')
  })


  router.get('/initiate',function(req,res){
  res.render('initiate.html')
  })
  
//3.把router导出
module.exports = router
  

