const baseURL = 'http://localhost:8080/';
const sentiment = 'sentiment';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value
    let content;
    if (document.getElementById('input-url').checked) {
        if(!Client.checkForUrl(formText)){
            alert(formText + " is not a correct URL!");
            return;
        }
        content = {
            'url': formText
        }
    } else if (document.getElementById('input-text').checked) {
        content = {
            'text': formText
        }
    }
    console.log(content);
    

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
        body: JSON.stringify(
            content
        )
    })
    .then(res=>{
        return res.json();
    })
    .then(res=>{
        document.getElementById('nlp-text').innerHTML = formatStr(res.text);
        document.getElementById('nlp-polarity').innerHTML = res.polarity;
        document.getElementById('nlp-polarity-confidence').innerHTML = res.polarity_confidence;
        document.getElementById('nlp-subjectivity').innerHTML = res.subjectivity;
        document.getElementById('nlp-subjectivity-confidence').innerHTML = res.subjectivity_confidence;
        //document.getElementById('results').innerHTML = JSON.stringify(res);
    });
}


function formatStr(str){
    if(str.length > 500){
        str = str.substr(0,499)+'...'
        return str;
    }else
        return str;

}

export { handleSubmit }
//module.exports = testApi;