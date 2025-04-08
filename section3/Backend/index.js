const express = require('express')

require('dotenv').config()
const USerRouter = require('./routers/UserRouters')

// initialize express
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

app.use('/user', USerRouter);

// endpoints or routes
app.get('/', (req, res) => {
    res.send('response from express');
})

app.get('/add', (req, res) => {
    res.send('response from add');
})

// getall

 app.get('/getall', (req, res) => {
    res.send('response from getall');
 })
// delete
app.get('/delete', (req, res) => {
    res.send('response from getbbydelete');
 })


// update
app.get('/update', (req, res) => {
    res.send('response from getbyupdate');
 })

// starting the server
app.listen(port, () => {
    console.log('server started');
});