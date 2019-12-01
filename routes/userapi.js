const express = require('express');

const passport = require('passport');
const config = require('../config/database');
require('../config/passport')(passport);
const User = require('../models/registration');
const jwt = require('jsonwebtoken');
const router = express.Router();


function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1];


  if (token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, config.secret)
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }

  req.userId = payload.subject;
  next()
}







router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)
    } else {
      let payload = {
        subject: registeredUser._id
      }
      let token = jwt.sign(payload, config.secret)
      res.status(200).send({
        token
      })
    }
  })
})


router.get('/register', function (req, res, next) {
  User.find(function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

router.delete('/register/:id', function (req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, delpay) {
    if (err) return next(err);
    res.json(delpay);
  });
});




// Authenticate
router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({
    username: userData.username
  }, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      if (!user) {
        res.status(401).send('Invalid username');
      } else {

        console.log(user);

        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            // var token = jwt.sign(user.toJSON(), config.secret);
            // return the information including token as JSON
            // res.json({success: true, token: 'JWT ' + token});

            let payload = {
              subject: user._id
            }
            let token = jwt.sign(payload, config.secret)

            // res.json({success: true, token: 'JWT ' + token});

            res.status(200).send({
              token
            })
          } else {
            res.status(401).send({
              success: false,
              msg: 'Authentication failed. Wrong password.'
            });
          }

          // else {
          //   let payload = {subject: user._id}
          //   let token = jwt.sign(payload, 'secretKey')
          //   res.status(200).send({token})
          // }

        });
      }
    }
  });
});
