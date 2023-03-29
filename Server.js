const express = require('express')
const app = express()
const expressHbs = require('express-handlebars');
const mongoose = require('mongoose');


const uri = 'mongodb+srv://nvu806101:19ShRC4UNeVi69Dz@cluster0.iupvbq2.mongodb.net/Database?retryWrites=true&w=majority';
const Song = require('./Song');
app.get('/db', async (req, res) => {

    await mongoose.connect(uri).then(console.log("ket noi thanh cong"));
    let list = await Song.find({}).then((result) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(result);
    })

    const song = new Song({
        name: "chan ai",
        artist: "hehe",
        year: "2023"
    });
    await song.save()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        });


    //await Song.updateMany({ name: "hihi" }, { name: "heheh" })
    await Song.updateOne({ year: "2023" }, { $set: { name: "hihi" } })
    //await Song.deleteMany({ name: "chan ai" })
    await Song.deleteOne({ name: "chan ai" })

});
app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})
