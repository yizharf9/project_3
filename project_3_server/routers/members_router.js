const exp = require("express");
const Router = exp.Router();
const bl = require("../bls/members_bl");

Router.route("/").get(async (req, resp) => {
    let Members = await bl.getMembers();
    return resp.json(Members);
});

Router.route("/:id").get(async (req, resp) => {
    let Member = await bl.getMember(req.params.id);
    return resp.json(Member);
});

Router.route("/name/:id").get(async (req, resp) => {
    let Member = await bl.getMember_byName(req.params.id);
    return resp.json(Member);
});

Router.route("/").post(async (req, resp) => {
    let status = await bl.addMember(req.body);
    return resp.json(status);
});

Router.route("/:id").put(async (req, resp) => {
    let status = await bl.uptMember(req.params.id, req.body);
    return resp.json(status);
});

Router.route("/:id").delete(async (req, resp) => {
    let status = await bl.delMember(req.params.id);
    return resp.json(status);
});

module.exports = Router;
