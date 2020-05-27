# evaluate-news-nlp Project
This application uses aylienAPI to request a Sentiment Analysis[here](https://docs.aylien.com/textapi/endpoints/#sentiment-analysis) on a given text or url. An url input is validated against a number of criteria. By submitting a post request is being send to the server and then an api-request by the server to the aylien-api.
A response from the aylien-api is then send to the client which updates the results field at the bottom of the webpage.

## Getting started
Create a .env file in the root folder and paste your own AylienAPI id and key into this file like this:
API_ID=**************************
API_KEY=**************************

run `npm install`

To build a production build run `npm run build-prod` and `npm start`

For a development build run `npm run build-dev`

For tests run `npm test`

Default for production is port 8080 and for development 3000.