const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.post('/verifyuser',
    (req, res) => {
        UserController.login(req.body)
            .then(result => {
                res.send({ status: "ok", result: result, message: "" });
            })
            .catch(err => {
                res.send({status: "error", result: error});
           });
  });

  module.exports = router;