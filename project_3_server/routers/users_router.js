const exp = require("express");
const Router = exp.Router();
const bl = require("../bls/users_bl");

Router.route("/").get(async (req, resp) => {
    let Users = await bl.getUsers();
    return resp.json(Users);
});

Router.route("/:id").get(async (req, resp) => {
    let User = await bl.getUser(req.params.id);
    return resp.json(User);
});

Router.route("/name/:id").get(async (req, resp) => {
    let User = await bl.getUser_byName(req.params.id);
    return resp.json(User);
});

Router.route("/").post(async (req, resp) => {
    let status = await bl.addUser(req.body);
    return resp.json(status);
});

Router.route("/:id").put(async (req, resp) => {
    let status = await bl.uptUser(req.params.id, req.body);
    return resp.json(status);
});

Router.route("/:id").delete(async (req, resp) => {
    let status = await bl.delUser(req.params.id);
    return resp.json(status);
});

module.exports = Router;
