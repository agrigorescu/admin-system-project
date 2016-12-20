#!/usr/bin/env node --harmony
/**
 * Butterfly CLI
 */

'use strict'; //this command will allow me to use EC6 code only
/**
 * dependencies used
 */
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const http = require("http");
const program = require("commander");
const app = express();

//view engine
app.set('view engine', 'ejs');

/**
 * middleware used
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(routes);

/**
 * setting up the app to run the server
 */
program
    .action(() => {
      /**
       * creating the server and sending back the status code
       */
      const server = http.createServer((req, res) => {
        res.statusCode = 200;
      });
 })

/**
 * setting up the port
 */
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is listening on port ${process.env.PORT || 3000}. The page can now be viewed in browser.`);
});

