const express = require('express');
const route = require('./routes/app.js');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

const app = express();
app.use(express.json());
app.use(bodyParser.json());


app.use('/',route)


mongoose.connect("mongodb+srv://sonuk:kamble123@cluster0.vfrmzq9.mongodb.net/estrrado-DB" )
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});