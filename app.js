const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to display your glossary table
app.get('/', (req, res) => {
  // Replace this with your glossary data
  const glossary = [
    { term: 'DevOps', definition: 'A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and deliver features, fixes, and updates more frequently and reliably.' },
    // Add more terms and definitions here
  ];

  res.render('index', { glossary });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
