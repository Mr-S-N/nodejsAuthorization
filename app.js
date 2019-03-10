const express = require("express");
const cors = require("cors");
const db = require('./confing/database');
const app = express();
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));



db.authenticate()
    .then(()=>console.log('db conected'))
    .catch(err=> console.log("err"+ err));


app.use('',require('./routes/routes'));
app.listen(3000, () => {

    console.log("start");
});
