require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_URL;

// asynchhronous function - return
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;