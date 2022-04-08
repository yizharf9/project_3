const exp = require("express");
const Router = exp.Router();
const bl = require("../bls/movies_bl");

Router.route("/").get(async (req, resp) => {
    let Movies = await bl.getMovies();
    return resp.json(Movies);
});

Router.route("/:id").get(async (req, resp) => {
    let Movie = await bl.getMovie(req.params.id);
    return resp.json(Movie);
});

Router.route("/name/:id").get(async (req, resp) => {
    let Movie = await bl.getMovie_byName(req.params.id);
    return resp.json(Movie);
});

Router.route("/").post(async (req, resp) => {
    let status = await bl.addMovie(req.body);
    return resp.json(status);
});

Router.route("/:id").put(async (req, resp) => {
    let status = await bl.uptMovie(req.params.id, req.body);
    return resp.json(status);
});

Router.route("/:id").delete(async (req, resp) => {
    let status = await bl.delMovie(req.params.id);
    return resp.json(status);
});

module.exports = Router;
