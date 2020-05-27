function checkForUrl(inputText) {
    console.log("::: Running checkForInput :::", inputText);
    const re = new RegExp("\\.");
    if(!(inputText.match(re) 
    && inputText.length > 3)){
        return false;
    }
    return true;
}

export { checkForUrl }
