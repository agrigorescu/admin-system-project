# admin-system-project

##Admin System

####Prerequisites 
* javascript
* node.js

####Project Brief

#####Objectives
The purpose of this project is to create an admin system that allows a user to input information into the system
that could then be saved tpa database. The app should also be able to run a Node CLI application.
* The app should be run globally, and create a webserver with a local running web admin
* The web admin should be written in Vue.js
* The wev admin should take the inputed data and then execute a Node CLI Script
* The CLI script should clone down a Git Repo, and then create a Heroku app, then provision the required services
The CLI script should then edit some files in the cloned project and then push to Heroku
* Once depoyed the CLI script should delete the cloned repo

#####Requirements
* As a user I want to run the app globally
* As a user I can enter some information into a web admin which will form the basis of my generated project
* As a user the app will then auto create a Node.js and Heroku application by cloning a repo, making some changes and
deploying to Heroku
