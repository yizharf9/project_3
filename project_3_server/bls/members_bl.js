const Member = require("../models/members_model");
const subs_bl = require("./subs_bl");

const getMembers = () =>
    new Promise((resolve, reject) => {
        Member.find({}, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const getMember = (id) =>
    new Promise((resolve, reject) => {
        Member.findById(id, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const getMember_byName = (_Name) =>
    new Promise((resolve, reject) => {
        Member.find({ Fullname: _Name }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const addMember = (obj) =>
    new Promise((resolve, reject) => {
        let newMember = new Member(obj);
        newMember.save((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve("new Member created!");
            }
        });
    });

const uptMember = (id, obj) =>
    new Promise((resolve, reject) => {
        Member.findByIdAndUpdate(id, obj, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Member with an id of ${id} has been updated!`);
            }
        });
    });

const delMember = (id) => {
    subs_bl.del_memberSubs(id);
    return new Promise((resolve, reject) => {
        Member.findByIdAndDelete(id, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Member with an id of ${id} has been deleted!`);
            }
        });
    });
};

module.exports = {
    getMembers,
    getMember,
    getMember_byName,
    addMember,
    uptMember,
    delMember,
};
