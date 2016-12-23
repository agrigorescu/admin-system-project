/**
 * Index class is used to render the page
 * @param req,
 * @param res
 */
class Index {
    static showLayout(req,res) {
        res.render("layout");
    }
}

module.exports = Index;