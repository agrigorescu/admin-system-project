const BeeIndex = require("../bee/index");

class Bee {
    static runBee(req,res) {
        console.log("the first print");
        console.log(req.body.data);
        BeeIndex.promiseResolve(req.body.data)
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