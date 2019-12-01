const express = require('express');

const student_information = require('../models/student_information');
const student_result = require('../models/result');
const router = express.Router();

router.put('/cgpa/:id', function (req, res, next) {
  student_information.findByIdAndUpdate(req.params.id, {
    $set: {
      'result.cgpa': req.body.cgpa
    }
  }, function (err, updateData) {
    if (err) return next(err);
    res.json(updateData);
  });
});




router.put('/semester/:id', function (req, res, next) {
  var semest = req.body.semest;

  const ms = JSON.stringify(req.body);
  console.log('main set:' + ms);

  var set = {
    $set: {}
  };
  set.$set['result.' + semest + '.currentgpa'] = req.body.currentgpa;
  set.$set['result.' + semest + '.sgpa'] = req.body.sgpa;
  set.$set['result.' + semest + '.total_credit'] = req.body.total_credit;
  set.$set['result.' + semest + '.earn_credit'] = req.body.earn_credit;
  set.$set['result.' + semest + '.status'] = req.body.status;


  student_information.findByIdAndUpdate(req.params.id, set, function (err, updateData) {
    if (err) return next(err);
    res.json(updateData);
    console.log('this id:' + req.params.id);
  });
});


router.put('/pullcourse/:id/:sem/:semid', function (req, res, next) {

  var pull = {
    $pull: {}
  };
  pull.$pull['result.' + req.params.sem + '.subject'] = {
    '_id': req.params.semid
  }

  student_information.update({
    '_id': req.params.id
  }, pull, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});
// {$pull:{"result.first.subject":{'_id':req.params.semid}}}

router.put('/updateresult/:id', function (req, res, next) {
  var semest = req.body.semest;
  var push = {
    $push: {}
  };
  push.$push['result.' + semest + '.subject'] = req.body;
  console.log('push value: ' + JSON.stringify(push));



  student_information.findByIdAndUpdate(req.params.id, push, function (err, update) {
    if (err) return next(err);
    res.json(update);
  });
});



router.delete('/results/:id', function (req, res, next) {
  student_result.findByIdAndRemove(req.params.id, req.body, function (err, delpay) {
    if (err) return next(err);
    res.json(delpay);
  });
});


router.get('/getcourse/:selectsem/:courseid', function (req, res) {
  var con = {};
  var con2 = {};
  //con['_id'] = req.params.id;
  con['result.' + req.params.selectsem + '.subject._id'] = req.params.courseid;
  con2['result.' + req.params.selectsem + '.subject.$'] = 1;


  student_information.find(con, con2, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.put('/updatecourseresult/:courseid/:selectsem', function (req, res, next) {

  const ms = JSON.stringify(req.body);
  console.log('main set:' + ms);

  var idcon = {};
  idcon['result.' + req.params.selectsem + '.subject._id'] = req.params.courseid;

  var set = {
    $set: {}
  };
  set.$set['result.' + req.params.selectsem + '.subject.$'] = req.body;
  // set.$set['result.' + semest + '.sgpa'] = req.body.sgpa;
  // set.$set['result.' + semest + '.total_credit'] = req.body.total_credit;
  // set.$set['result.' + semest + '.earn_credit'] = req.body.earn_credit;
  // set.$set['result.' + semest + '.status'] = req.body.status;


  student_information.updateOne(idcon, set, function (err, updateData) {
    if (err) return next(err);
    res.json(updateData);
    console.log('this id:' + req.params.id);
  });
});

module.exports = router;