const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.post('/verifyuser',
    (req, res) => {
        UserController.login(req.body)
            .then(result => {
                res.status(200).send({ status: "ok", result: result, message: "" });
            })
            .catch(err => {
                console.error(err);
                res.status(500).send({status: "error", result: err});
           });
  });

  module.exports = router;