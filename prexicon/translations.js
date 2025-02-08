const translationDictionaries = {
  py: {
    "print()": "System.out.println();",
    // Add more words as needed for English
  },
  java: {
    // ...
  },
  // Add more language dictionaries as needed
};

document.addEventListener("DOMContentLoaded", function () {
  const translateButton = document.getElementById("translateButton");
  const sourceText = document.getElementById("sourceText");
  const translatedText = document.getElementById("translatedText");
  const sourceLanguageSelect = document.getElementById("sourceLanguage");
  const targetLanguageSelect = document.getElementById("targetLanguage");

  translateButton.addEventListener("click", function () {
    const textToTranslate = sourceText.value;
    const sourceLanguage = sourceLanguageSelect.value;
    const targetLanguage = targetLanguageSelect.value;

    // Replace this with your translation logic
    const translated = translate(textToTranslate, sourceLanguage, targetLanguage);

    translatedText.textContent = translated;
  });

  // Custom translation logic
  function translate(text, sourceLanguage, targetLanguage) {
    const words = text.toLowerCase().split(" ");
    const sourceTranslationDictionary = translationDictionaries[sourceLanguage] || {};
    const targetTranslationDictionary = translationDictionaries[targetLanguage] || {};
    const translatedWords = words.map(word => {
      if (sourceLanguage === targetLanguage) {
        // If source and target languages are the same, use the same word
        return word;
      } else if (targetLanguage === "py" && sourceTranslationDictionary[word]) {
        // Translate from source to English
        return sourceTranslationDictionary[word];
      } else if (sourceLanguage === "py" && targetTranslationDictionary[word]) {
        // Translate from English to target
        return targetTranslationDictionary[word];
      } else {
        return word;
      }
    });

    return translatedWords.join(" ");
  }
});