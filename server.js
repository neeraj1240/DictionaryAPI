const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

const wordsData = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));



app.get('/meaning/:word?', (req, res) => {
    const word = req.params.word;
  
    
    if (!word) {
      return res.status(400).json({ error: 'Please provide a word to search for its meaning.' });
    }
  

    if (!isNaN(word)) {
      return res.status(400).json({ error: 'Invalid input. Please enter a valid word.' });
    }
  
    const lowerCaseWord = word.toLowerCase();
    const meaning = wordsData[lowerCaseWord];
  
    if (meaning) {
      res.json({ word: lowerCaseWord, meaning });
    } else {
      res.status(404).json({ error: 'Word not found' });
    }
  });
  

app.get('/randomWord', (req, res) => {
    const words = Object.keys(wordsData);
    const randomWord = words[Math.floor(Math.random() * words.length)];
    res.json({ word: randomWord });
  });

  app.get('/randomWordWithMeaning', (req, res) => {
    const words = Object.keys(wordsData);
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const meaning = wordsData[randomWord];
    res.json({ word: randomWord, meaning });
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
