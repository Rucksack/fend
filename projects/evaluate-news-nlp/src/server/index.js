const express = require('express');
const cors = require('cors');
const bodyParser = require('webpack-body-parser');

const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const aylien = require('aylien_textapi');

const port = 8080;

// Start up an instance of app
const app = express()

/* Middleware */
// Where we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the dist folder
app.use(express.static('dist'))

// set aylien API credentials
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

console.log(__dirname)



// Routes
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

app.post('/sentiment', (req, res)=>{
    console.log("sending API request");
    
    textapi.sentiment(req.body, 
        (error, responseApi)=>{
            if(error === null){
                res.send(responseApi);
                console.log("API response received");
            }
        }
    )
});

// designates what port the app will listen to for incoming requests
app.listen(port, ()=>{
    console.log(`server listening on port ${port}!`);
});