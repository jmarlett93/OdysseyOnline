const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.post('/login',
    (req, res) => {
        UserController.login(req.body)
            .then(result => {
                res.send({ status: "ok", result: [], message: "loud and clear" });
            })
            .catch(err => {
                res.send({status: "error", result: error});
           });
  });