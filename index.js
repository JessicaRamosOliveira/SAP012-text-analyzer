import analyzer from "./analyzer.js";

//declarei tudo//
const wordCount = document.querySelector('[data-testid="word-count"]');
const wordCountText = "Contagem de palavras: " 

const characterCount = document.querySelector('[data-testid="character-count"]');
const characterCountText = "Contagem de caracteres: "

const characterCountExcludingSpaces = document.querySelector('[data-testid="character-no-spaces-count"]');
const characterCountExcludingSpacesText = "Caracteres sem espaços e sinais de pontuação: "

const numberCount = document.querySelector('[data-testid="number-count"]');
const numberCountText = "Contagem de números: "

const numberSum = document.querySelector('[data-testid="number-sum"]');
const numberSumText = "Soma total de números: "

const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');
const wordLengthAverageText = "Comprimento das palavras: "

//chamei a funcao
const button = document.getElementById("reset-button");
button.addEventListener("click", function () {
  characterCount.textContent = "contagem de caracteres: 0";
  textArea.value = "";
  wordCount.textContent = "contagem de palavras: 0";
  characterCountExcludingSpaces.textContent ="Caracteres sem espaços e sinais de pontuação: 0";
  numberCount.textContent = "contagem de números: 0";
  numberSum.textContent = "soma total de números: 0";
  wordLengthAverage.textContent = "comprimento das palavras: 0";
});

const textArea = document.querySelector('textArea[name="user-input"]');
textArea.addEventListener('input', function lerMetricas() {
  wordCount.textContent = wordCountText + analyzer.getWordCount(textArea.value);
  characterCount.textContent = characterCountText + analyzer.getCharacterCount(textArea.value);
  characterCountExcludingSpaces.textContent = characterCountExcludingSpacesText + analyzer.getCharacterCountExcludingSpaces(textArea.value),
  numberCount.textContent = numberCountText + analyzer.getNumberCount(textArea.value);
  numberSum.textContent = numberSumText + analyzer.getNumberSum(textArea.value);
  wordLengthAverage.textContent = wordLengthAverageText + analyzer.getAverageWordLength(textArea.value);
});

