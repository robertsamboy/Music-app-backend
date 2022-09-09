const express = require('express')
const router = express.Router();
const Musics = require('../models/music');


//SOON TO BE INDEX ROUTE
router.get('/', (req, res)=>{
    Musics.find({}, (err, foundSong)=>{
        res.json(foundSong);
    });
});

//DELETE ROUTE
router.delete('/:id', (req, res)=>{
    Musics.findByIdAndRemove(req.params.id, (err, deletedSong)=>{
        res.json(deletedSong);
    });
});


//UPDATE ROUTE
router.put('/:id', (req, res)=>{
    Musics.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedSong)=>{
        res.json(updatedSong);
    });
});















router.post('/', (req, res)=>{
    Musics.create(req.body, (err, createdSong)=>{
        res.json(createdSong); //.json() will send proper headers in response so client knows it's json coming back
    });
});

module.exports = router