const express = require('express');

const passport = require('passport');
require('../config/passport')(passport);
const jwt = require('jsonwebtoken');
const student_information = require('../models/student_information');
const student_result = require('../models/result');
const course = require('../models/course');
const router = express.Router();


router.get('/student' ,  function(req, res, next) {
  student_information.find(function(err, data) {
    if (err) return next(err);
    res.json(data);
  });
});


router.get('/student/:id', function(req, res, next) {
  student_information.findById(req.params.id, function(err, single_student) {
    if (err) return next(err);
    res.json(single_student);
  });
});




router.get('/student_id/:dept_id', function(req, res){
  student_information.find({dept_id: req.params.dept_id}, function(err, data){
    if (err) return next(err);
    res.json(data);
  });
});


router.post('/addstudent', function(req, res, next) {
  student_information.create(req.body, function (err, data) {
    if (err) { 
      return next(err);
    }
    else{
      let payload = { subject: data._id }
      let token = jwt.sign(payload,'secretkey');
      var objs = {};
      objs.token = token;
      objs._id = data._id;
      res.status(200).send(objs);
    }
  });
});

router.put('/student/:id', function (req, res, next) {
  var set = {
    $set: {}
  };
  set.$set['basic_info'] = req.body;
  set.$set['educational_info'] = req.body;
  set.$set['billing_info'] = req.body;
  
  student_information.findByIdAndUpdate(req.params.id, set, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/student/:id', function(req, res, next) {
  student_information.findByIdAndRemove(req.params.id, req.body, function (err, delStudent_infor) {
    if (err) return next(err);
    res.json(delStudent_infor);
  });
});

router.post('/login_student', (req, res) => {
  let userData = req.body;

  student_information.findOne({dept_id:userData.dept_id}, (error,data) => {
    if(!data) {
      res.status(401).send('Invalid email');
    }
    else if(data.password !== userData.password) {
      res.status(401).send('Invalid password');
    }
    else{
      let payload = { subject: data._id }
      let token = jwt.sign(payload,'secretkey');
      var objs = {};
      objs.token = token;
      objs._id = data._id;
      res.status(200).send(objs);
    }
  });
})



module.exports = router;
