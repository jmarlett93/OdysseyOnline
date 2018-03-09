const express = require('express');
const router = express.Router();

router.get('/tweet',
(req, res)=>{
    res.send({status:"ok", result:[], message:"loud and clear"});
});

router.delete('/:id', (req,res)=> {
   res.status(200).send({status:"ok", result:[], message:"delete canary"});

});

module.exports = router;