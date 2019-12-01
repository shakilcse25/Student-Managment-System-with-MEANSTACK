const express = require('express');

const course = require('../models/course');
const payment = require('../models/student_payment');
const router = express.Router();


router.get('/course', function (req, res) {
  course.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});


router.get('/course/:id', function (req, res) {
  course.findById(req.params.id, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/coursebyname/:val', function (req, res) {
  console.log('in api val by req:' + req.params.val);
  const crs = JSON.stringify(req.params.val);
  console.log('after string crs is : ' + crs);
  course.find({
    'course_name': req.params.val
  }, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});


router.post('/addcourse', function (req, res, next) {
  course.create(req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.put('/editcourse/:id', function (req, res, next) {
  course.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/deletecourse/:id', function (req, res, next) {
  course.findByIdAndRemove(req.params.id, req.body, function (err, delpay) {
    if (err) return next(err);
    res.json(delpay);
  });
});

router.get('/payment', function (req, res) {
  payment.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});


router.get('/payment/:id', function (req, res) {
  payment.findById(req.params.id, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.post('/payment', function (req, res, next) {
  payment.create(req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});
module.exports = router;