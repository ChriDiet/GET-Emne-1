let text = '';

function updateView() {
   document.getElementById('app').innerHTML = /*HTML*/ `
      <label for="text">Skriv en setning</label>
      <input type="text" id="text" oninput="text = this.value">
      <button onclick="analyzeText(text); updateView()">OK</button>
      <div>Din tekst: ${text}</div>
      ${createStatsHtml(text)}
   `;
}


function createStatsHtml(text) {
   let html = '';
   let textStats = analyzeText(text)
   let contents = [       //aner ikke hva jeg skal kalle denne? er contents ok?
      {text: 'Antall ord: ', variable: textStats.wordCount},
      {text: 'Antall bokstaver: ', variable: textStats.letterCount},
      {text: 'Antall ikke-bokstaver', variable: textStats.nonLetterCount},
      {text: 'Mest frekvente bokstav: ', variable: textStats.mostCommonLetter},
      {text: 'Lengste Ord: ', variable: textStats.longestWord}
   ];

   for (let content of contents) {
      html += `<div> ${content.text} ${content.variable}</div>`;
   }
   return html;
}


function analyzeText(text) {
   let textStats = {
      wordCount: 0,
      letterCount: 0,
      nonLetterCount: 0,
      mostCommonLetter: '' ,
      longestWord: ''
   }

   if (!text) return textStats;
   
   let words = text.toLowerCase().split(' ');
   let characters = text.toLowerCase().split('');

   return textStats = {
      wordCount: getWordCount(words),
      letterCount: getLetterCount(characters),
      nonLetterCount: getNonLetterCount(characters),
      mostCommonLetter: getMostCommonLetter(characters),
      longestWord: getLongestWord(words)
   }
}


function getWordCount(words) {
   let wordCount = 0;
   
   for(let word of words) {
      if (getOnlyLetters(word) !== '') //burde getOnlyLetters funksjonen hete noe annet?
         wordCount++;
   }
   return wordCount;
}


function getLetterCount(characters) {
   let letterCount = '';

   for(let character of characters) {
      if (isLetter(character)) {
         letterCount += character;
      }
   }
   return letterCount.length;
}


function getNonLetterCount(characters) {
   let nonLetterCount = '';
   
   for(let character of characters) {
      if (!isLetter(character)) {
         nonLetterCount += character;
      }
   }
   return nonLetterCount.length;
}    


function getMostCommonLetter(characters) {
   let mostCommonLetter = '';
   let letterFrequencies = {};
   let counter = 0;

   for (let character of characters) {
      if(isLetter(character))
   letterFrequencies[character] = (letterFrequencies[character] || 0) + 1;
   };

   for (let letter in letterFrequencies) {
      if(letterFrequencies[letter] > counter) {
         mostCommonLetter = letter;
         counter = letterFrequencies[letter];
      }
   }
   return mostCommonLetter;
}
      

function getLongestWord(words) {
   let cleanedWord = ''; //burde cleanedWord hete noe annet?
   let longestWord = '';

   for (let word of words) {
      cleanedWord = getOnlyLetters(word)
      if (cleanedWord.length > longestWord.length)
         longestWord = cleanedWord;
   }
   return longestWord;
}


function getOnlyLetters(word) { //annet navn? 
   let characters = word.split('');
   let cleanedWord = '';

   for(let character of characters) {
      if (isLetter(character)) {
         cleanedWord += character;
      }
   }
   return cleanedWord;
}


function isLetter(character) {
   return character.toLowerCase() != character.toUpperCase();
}