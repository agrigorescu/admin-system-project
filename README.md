# admin-system-project

# Admin System

## Difficulty - Very High


## Prerequisites

* Javascript Foundations
* Node.js Foundations

***

## Project Brief

### Objectives

The purpose of this project is to create an admin system that allows a user to input information into the system that could then be saved to a database. The app should also be able to run a node CLI appication.

* The app should be run globally, and creates a webserver with a local running web admin
* The web admin should be written in Vue.js
* The web admin should take the inputed data and then execute a Node CLI Script
* The CLI script should clone down a Git Repo, and then create a Heroku app, and then provision the required services. The CLI script should then edit some files in the cloned project and push to Heroku
* Once deployed the CLI script should delete the cloned repo

***

## Requirements

* As a user I can run the node app globally
* As a user I can enter some information into a web admin which will form the basis of my generated project
* As a user the app will then auto create a Node.js and Heroku application by cloning a repo, making some changes and deploying to heroku

***

####How to Use

!Warning!

This project assumes that you have Node.js installed globally and that you are logged into Heroku in your terminal.

1. Upon downloading the project, open up a terminal and navigate to the directry in which the project is. 
2. Then type the command "node butterfly.js" and press enter. That will run a local server on port 3000 (you can change the port name in the butterfly.js if that port is not free). 
3. After that navigate to your browser to localhost:3000(or the port number you have changed it to). A webpage will load that will display a form. 
4. Upon completing the form and pressing "submit", the program will pack the information from the form in a JSON object and send it to a Node.js CLI called Bee. 
5. Bee will automatically run in your terminal and create a directory in which it will clone a git repo from a template that resides in my github account (for the purpose of the exercise I used a simple contact form created in a previous exercise). 
6. Then the JSON will be written in a txt file in the cloned template which. 
7. Then Bee CLI will initialize a Heroku app and then add Sendgrid, MongoLab, Heroku-Redis and Cloudinary provisions. 
8. After, it will push the app to Heroku and delete the cloned repo.
