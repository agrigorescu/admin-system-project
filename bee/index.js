#!/usr/bin/env node --harmony
/**
 * The prototype of the Bee CLI fo the Admin System
 * This CLI creates a directory into wich it clones a template repo from git.
 * Then adds some data from an object into a txt file and then creates a heroku app.
 * It then adds specific provisions to the heroku app and then pushes the code to heroku. 
 * After it deletes the file in which the cloned git repo is.
 */
//including the libraries required
const program = require('commander'); //required for creating the cli app - not sure if i need it
const mkdirp = require('mkdirp'); //required for makinf a directory.
const fs = require('fs-extra'); //required to remove a file
const exec = require('child_process').exec; //this is user to be able to run command line commands
const shell = require('shelljs');

//creating a global variable that will save the location for further use
let currentLoc;

/**
 * This function include calls to all the promises required to run the app
 */
function promiseResolve(obj) {
    return new Promise(
        (resolve, reject) => {
            createDir()
                .then(() => {
                    return Promise.all([gitClone()]);
                })
                .then(() => {
                    console.log(obj);
                    return Promise.all([updateGitClone(obj)]);
                })
                .then(() => {
                    return Promise.all([changeWorkingDirectory()]);
                })
                .then(() => {
                    return Promise.all([createHerokuApp()]);
                })
                .then(() => {
                    return Promise.all([addHerokuProvisionsSendgrid()]);
                })
                .then(() => {
                    return Promise.all([addHerokuProvisionsMongoLab()]);
                })
                .then(() => {
                    return Promise.all([addHerokuProvisionsRedis()]);
                })
                .then(() => {
                    return Promise.all([addHerokuProvisionsCloudinary()]);
                })
                .then(() => {
                    return Promise.all([pushHerokuApp()]);
                })
                .then(() => {
                    return Promise.all([deleteDir()]);
                })
                .then(() => {
                    console.log("Done");
                    resolve();
                })
                .catch(err => {
                    console.log(err.message);
                    reject(err);
                })
        }
    )

};


/** 
* This function creates a directory
* in the working directory
*/
function createDir() {
    return new Promise(
        (resolve, reject) => {
            currentLoc = process.cwd(); //assigning the current location to a varible
            console.log(currentLoc);
            currentLoc += '/' + "gitProjectClone"; //appending the directory name to the path
            console.log(currentLoc);
            // actually creating the directory using a nde library
            mkdirp(currentLoc, (err) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('File created!')
                    resolve();
                }
            })
        }
    )
};

/**
 * This function clones the git repo. 
 * The link to the repo is hardcoded.
 * In future versions should be read from the console
 */

function gitClone() {
    return new Promise(
        (resolve, reject) => {
            console.log("cloning the git repo");
            exec("git clone https://github.com/agrigorescu/admin-contact-demo-object.git gitProjectClone", (error, stdout, stderr) => {
                if (error) {
                    console.log("Cloning could not be complerted because of error " + error);
                    reject(error);
                } else {
                    console.log("stdout " + stdout);
                    console.log("stderr " + stderr);
                    resolve();
                }
            })
        }
    )
};



/**
 * This function will create a file with the information provided
 */
function createNewFileWithChanges(programName, dir) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(programName, dir, (err, result) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log("the result is "+result);
                    console.log("Created : " + programName.substring(1));
                    resolve();
                }
            });
        }
    )
}

/**
 * This function will make changes to the git repo using an object
 */
function updateGitClone(obj) {
    return new Promise(
        (resolve, reject) => {
            console.log("the third print");
            console.log(obj);
            let changesToGit = obj;
            createNewFileWithChanges(currentLoc + '/test.txt', JSON.stringify(changesToGit))
                .then(() => {
                    console.log('The data was added to file!');
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        })
}

/**
* This function deletes the directory
*/
function deleteDir() {
    return new Promise(
        (resolve, reject) => {
            console.log(currentLoc);
            fs.remove(currentLoc, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log('Delete Success!!')
                    resolve();
                }
            })
        }
    )
};

/**
 * This function moved into the cloned git repo 
 */
function changeWorkingDirectory(username, password) {
    return new Promise(
        (resolve, reject) => {
            shell.cd('gitProjectClone');
            console.log("The program is in "+process.cwd());
            resolve();
        }
    )
};

/**
 * This function creates a heroku app 
 */
function createHerokuApp() {
    return new Promise(
        (resolve, reject) => {
            console.log("Create the Heroku app");
            exec("heroku create", (error, stdout, stderr) => {
                if (error) {
                    console.log("error " + error);
                    reject(error);
                } else {
                    console.log("The epp can be found at " + stdout);
                    console.log(stderr);
                    resolve();
                }
            })
        }
    )
};

/**
 * This set of functions adds provisions to the heroku app 
 */
//The first function add Sendgrid
function addHerokuProvisionsSendgrid(username, password) {
    return new Promise(
        (resolve, reject) => {
            console.log("Adding Sendgrid");
            exec("heroku addons:create sendgrid:starter", (error, stdout, stderr) => {
                if (error) {
                    console.log("error " + error);
                    reject(error);
                } else {
                    console.log(stdout);
                    console.log(stderr);
                    resolve();
                }
            })
        }
    )
};

//The second function will add MongoLab
function addHerokuProvisionsMongoLab(username, password) {
    return new Promise(
        (resolve, reject) => {
            console.log("Adding MongoLab");
            exec("heroku addons:create mongolab:sandbox", (error, stdout, stderr) => {
                if (error) {
                    console.log("error " + error);
                    reject(error);
                } else {
                    console.log(stdout);
                    console.log(stderr);
                    resolve();
                }
            })
        }
    )
};

//The next function will add Redis DB
function addHerokuProvisionsRedis(username, password) {
    return new Promise(
        (resolve, reject) => {
            console.log("Adding Heroku Redis");
            exec("heroku addons:create heroku-redis:hobby-dev", (error, stdout, stderr) => {
                if (error) {
                    console.log("error " + error);
                    reject(error);
                } else {
                    console.log(stdout);
                    console.log(stderr);
                    resolve();
                }
            })
        }
    )
};

//This funciton will add Cloudinary
function addHerokuProvisionsCloudinary(username, password) {
    return new Promise(
        (resolve, reject) => {
            console.log("Adding Cloudinary");
            exec("heroku addons:create cloudinary:starter", (error, stdout, stderr) => {
                if (error) {
                    console.log("error " + error);
                    reject(error);
                } else {
                    console.log(stdout);
                    console.log(stderr);
                    resolve();
                }
            })
        }
    )
};

/**
 * This function pushes the app to heroku
 */
function pushHerokuApp(username, password) {
    return new Promise(
        (resolve, reject) => {
            console.log("Pushing to Heroku");
            exec("git push heroku master", (error, stdout, stderr) => {
                if (error) {
                    console.log("error " + error);
                    reject(error);
                } else {
                    console.log(stdout);
                    console.log(stderr);
                    resolve();
                }
            })
        }
    )
}

module.exports.promiseResolve = promiseResolve;