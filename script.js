document.getElementById("hablar").addEventListener("click", ()  => {
    decir(document.getElementById("texto").value);
});

function decir(texto){
const utterance = new SpeechSynthesisUtterance(texto);
speechSynthesis.speak(utterance);
texto.pttch = 2;
texto.voices[7];



}