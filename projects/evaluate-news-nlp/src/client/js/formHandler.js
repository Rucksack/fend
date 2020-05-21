const baseURL = 'http://localhost:8080/';
const sentiment = 'sentiment';
const getResponse = 'get-response';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    /*
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */
    
    fetch(baseURL+sentiment, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'text': formText
        })
    })
    .then(res=>{
        return res.json();
    })
    .then(res=>{
        document.getElementById('results').innerHTML = JSON.stringify(res);
    });
}

export { handleSubmit }
