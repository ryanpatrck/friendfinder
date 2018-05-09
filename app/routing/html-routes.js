//Dependencies
var path = require('path');

//ROUTING

module.exports = (app) =>{
  //default GET route that leads to home.html - displays home page
  app.get('/survey',  (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //a USE route to home page
  app.use( (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};

