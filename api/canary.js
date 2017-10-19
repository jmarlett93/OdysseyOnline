const express = require('express');
const router = express.Router();
const List = require('../dataAccess/models/list');

router.get('/tweet',
(req, res)=>{
    res.send({status:"ok", result:[], message:"loud and clear"});
});

router.get('/',(req,res) => {

    List.find({}).then(lists => {
        res.status(200).send({status:"ok", result: lists, message:"hello canary"});
    });
});

router.post('/', (req,res) => {
    console.log(req.body);
     let newList = new List({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    });
    newList.save().then(()=>{
        res.status(200).send({status:"ok", result:[], message:"post canary"});
    }).catch(err => {
        res.status(500).send({status:"error", message:err});
    });
});

router.delete('/:id', (req,res)=> {
   res.status(200).send({status:"ok", result:[], message:"delete canary"});

});

module.exports = router;