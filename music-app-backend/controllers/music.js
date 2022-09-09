const Musics = require('../models/music');




















router.post('/', (req, res)=>{
    Musics.create(req.body, (err, createdSong)=>{
        res.json(createdSong); //.json() will send proper headers in response so client knows it's json coming back
    });
});