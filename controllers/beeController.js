const BeeIndex = require("../bee/index");

class Bee {
    static runBee(req, res) {
        BeeIndex.promiseResolve()
            .then(() => {
                console.log("It worked!");
                res.status(200).send("Done");
            })
            .catch(error => {
                console.log(`It fucked up because ${error}`);
                res.status(400).send(error.message);
            });

    }
}

module.exports = Bee;