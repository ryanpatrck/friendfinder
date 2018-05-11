const express = require('express')
      bodyParser = require('body-parser')
      app = express()
      PORT = process.env.PORT || 8080;
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


app.listen(PORT,() => {
    console.log("App listening on PORT: " + PORT);
})

