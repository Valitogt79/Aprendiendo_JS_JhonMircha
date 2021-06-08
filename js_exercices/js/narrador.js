const d = document,
  w = window;

export default function speechReader() {
  const $speechSelection = d.getElementById("speech-select"),
    $speechTextarea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

  //console.log(speechMessage);

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    // console.log(w.speechSynthesis);
    //console.log(w.speechSynthesis.getVoices());

    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      //console.log(e);
      voices = w.speechSynthesis.getVoices();
      //console.log(voices);
      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} - ${voice.language}`;
        $speechSelect.appendChild($option);
      });
    });
  });
  d.addEventListener("change", (e) => {});
  d.addEventListener("click", (e) => {});
}
