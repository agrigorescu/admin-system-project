const chai = require('chai');


const Functions = require("../bee/index");
const func = new Functions();

chai.use(require('chai-fs'));

describe("Demo", () => {
    it("should check for gitProjectClone directory", (done) => {
        func.createDir();
        expect("../gitProjectClone").to.be.a.directory("It exists").and.empty;
        done();
    });

    it("shoud check that there is no gitProjectClone directory", (done) => {
        func.deleteDir();
        expect("../gitProjectClone").to.not.be.a.path("The directory does not exist");
        done();
    });
});
