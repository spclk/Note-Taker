// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 7777;

// Sets up the Express app to handle data parsing that comes with post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connects to the front end public folder
app.use(express.static('public'));

// Empty array for storing all notes
const allNotes = [];

// GET Routes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, './db/db.json')));

// POST request to add new notes 
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const dB = fs.readFileSync(path.join(__dirname, './db/db.json'),'utf8');
    const parsedDB = JSON.parse(dB);
    let newID = uuidv4();
    newNote.id = newID;
    parsedDB.push(newNote);
    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(parsedDB));
    return res.json(parsedDB);
  });

// DELETE route to delete specified notes
app.delete('/api/notes/:id', (req, res) => {
 
  const deleteDB = fs.readFileSync(path.join(__dirname, './db/db.json'),'utf8');
  const parsedDeleteDB = JSON.parse(deleteDB);
  const newArray = parsedDeleteDB.filter((note)=> {
    return req.params.id !== note.id;
  })
  fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(newArray));
  return res.json(newArray);
});

// Server listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });