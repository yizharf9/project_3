const exp = require("express");
const Router = exp.Router();
const bl = require("../bls/subs_bl");

Router.route("/").get(async (req, resp) => {
    let Subs = await bl.getSubs();
    return resp.json(Subs);
});

Router.route("/member/:id").get(async (req, resp) => {
    let Subs = await bl.get_memberSubs(req.params.id);
    return resp.json(Subs);
});
Router.route("/movie/:id").get(async (req, resp) => {
    let Subs = await bl.get_movieSubs(req.params.id);
    return resp.json(Subs);
});

Router.route("/:id").get(async (req, resp) => {
    let Sub = await bl.getSub(req.params.id);
    return resp.json(Sub);
});

Router.route("/").post(async (req, resp) => {
    let status = await bl.addSub(req.body);
    return resp.json(status);
});

Router.route("/:id").put(async (req, resp) => {
    let status = await bl.uptSub(req.params.id, req.body);
    return resp.json(status);
});

Router.route("/:id").delete(async (req, resp) => {
    let status = await bl.delSub(req.params.id);
    return resp.json(status);
});

Router.route("/member/:id").delete(async (req, resp) => {
    let status = await bl.del_memberSubs(req.params.id);
    return resp.json(status);
});

Router.route("/movie/:id").delete(async (req, resp) => {
    let status = await bl.del_movieSubs(req.params.id);
    return resp.json(status);
});

module.exports = Router;
