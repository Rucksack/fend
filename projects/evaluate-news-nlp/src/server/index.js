let path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
dotenv.config();
const aylien = require('aylien_textapi');

const app = express()

app.use(express.static('dist'))

// set aylien API credentials
let textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

textapi.sentiment({
    'text': 'John is a very good football player!'
}, function(error, response){
    if (error === null){
        console.log(response);
    }
});

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
