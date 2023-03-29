const mongoose =require('mongoose');
const SongChema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    artist:{
        type:String,
        require: true
    },
    year:{
        type:String,
        require: true,
        default:2020,
    }
})
const Song = new mongoose.model('song', SongChema);
module.exports = Song;