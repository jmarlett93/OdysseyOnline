const express = require('express');
const router = express.Router();

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

router.get('/noauth/tweet',
(req, res)=>{
    res.send({status:"ok", result:[], message:"loud and clear"});
});

router.get('/tweet', isLoggedIn,
(req, res)=>{
    res.send({status:"ok", result:[], message:"loud and clear"});
});

router.delete('/:id', (req,res)=> {
   res.status(200).send({status:"ok", result:[], message:"delete canary"});

});

module.exports = router;