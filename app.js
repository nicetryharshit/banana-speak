var inputTextArea = document.querySelector("#txt-area-input");
var outputTextArea = document.querySelector("#txt-area-output");
var btnTranslate = document.querySelector("#btn-translate");
var translateText = document.querySelector("#txt-translate");

var baseURL = "https://api.funtranslations.com/translate/minion.json";

function generateURL(inputText) {
    return baseURL + "?" + "text=" + inputText;
}

function displayOutput(json) {
    var translation = json.contents.translated;
    outputTextArea.innerText = translation;
    btnTranslate.disabled = false;
    translateText.textContent = "minionify !";
}

function handleError(error) {
    alert("try again in an hour")
    // alert(error.value);
    // console.log(error);
    // console.log(error.value.toString());
    btnTranslate.disabled = false;
    translateText.textContent = "minionify !";


}
btnTranslate.addEventListener("click", () => onTranslate());

function onTranslate() {
    btnTranslate.disabled = true;
    translateText.textContent = "translating...";
    var inputText = inputTextArea.value;
    fetch(generateURL(inputText))
        .then(response => response.json())
        .then(json => displayOutput(json))
        .catch(handleError)
}
