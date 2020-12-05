const txtInput = document.querySelector("#txt-input");
const btnTranslate = document.querySelector("#btn-translate");
const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function clickEventHandler() {
  //outputDiv.innerHTML = "Hello" + txtInput.value; // reading and processing the output to the screen
  const inputText = txtInput.value;
  txtInput.value = "";
  // txtInput.placeholder = inputText;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      // outputDiv.innerHTML = translatedText;
      // txtInput.placeholder = translatedText;
      txtInput.value = translatedText;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickEventHandler);
