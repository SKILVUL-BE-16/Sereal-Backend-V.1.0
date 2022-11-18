const mongoose = require('mongoose')
const username = "Sereal";
const password = "sereal";
const cluster = "cluster0.488cqlp";
const dbname = "beserial";

// const DB_URL = "mongodb+srv://Sereal:sereal@cluster0.488cqlp.mongodb.net/serealisasi?retryWrites=true&w=majority"
// const DB_URL = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
const DB_URL = "mongodb://127.0.0.1:27017/tpa-5";
//"mongodb://127.0.0.1:27017/tpa-5"
// mongodb+srv://Sereal:sereal@cluster0.488cqlp.mongodb.net/?retryWrites=true&w=majority

const db = mongoose.connect(DB_URL);
module.exports = db