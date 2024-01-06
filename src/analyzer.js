const analyzer = {
  getCharacterCount: (text) => {
    return text.length;
  },

  getWordCount: (text) => {
    // Separa em palavras
    const splitWords = text.split(/\s+/);
    // Filtro para remover espaços e números
    const wordsNoSpacesNoNumbers = splitWords.filter(word => word !== ''&& !/\d/.test(word));
    // Retorna apenas a contagem de palavras
    return wordsNoSpacesNoNumbers.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const cleanText = text.replace(/[^\w\s]/g, "").replace(/\s+/g, "");
    return cleanText.length;
  },

  getNumberCount: (text) => {
    const isThatANum = text.match(/\b\d+(\.\d+)?\b/g);
    return isThatANum ? isThatANum.length : 0;
  },

  getNumberSum: (text) => {
    const numberSum = text.match(/\b\d+(\.\d+)?\b/g);
    if (numberSum) {
      let total = 0;
      for (let i = 0; i < numberSum.length; i++) {
        total += Number(numberSum[i]);
      }
      return total;
    } else {
      return 0;
    }
  },

  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/);
    const characterTotal = words.reduce((acc, word) => acc + word.length, 0);
    const average = characterTotal / words.length || 0;
    return parseFloat(average.toFixed(2));
  },
};

export default analyzer;

