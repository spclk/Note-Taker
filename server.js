// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 7777;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Empty array for storing all notes
const allNotes = [];

// GET Routes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, './db/db.json')));
//return res.json(notes));

// POST
app.post('/api/notes', (req, res) => {
    const newNote = ""
  
    id
    db.json
  
    
    allNotes.push(newNote);
    return res.json(notes);
  });



// Router for the users
require('./public/assets/js/index')(app);

// Writer
fs.writeFile(),(err) => {
    err ? console.log(err) : console.log('Successfully added notes!')
  };


// Server listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });