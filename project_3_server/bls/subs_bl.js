const Sub = require("../models/Subs_model");
const movie_bl = require('./movies_bl')

const getSubs = () =>
    new Promise((resolve, reject) => {
        Sub.find({}, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const get_memberSubs = (memberid) =>
    new Promise((resolve, reject) => {
        Sub.find({ MemberID: memberid }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const getSub = (id) =>
    new Promise((resolve, reject) => {
        Sub.findById(id, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const addSub = (obj) =>
    new Promise((resolve, reject) => {
        let newSub = new Sub(obj);
        newSub.save((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve("new Sub created!");
            }
        });
    });

const uptSub = (id, obj) =>
    new Promise((resolve, reject) => {
        Sub.findByIdAndUpdate(id, obj, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Sub with an id of ${id} has been updated!`);
            }
        });
    });

const delSub = (id) =>
    new Promise((resolve, reject) => {
        Sub.findByIdAndDelete(id, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Sub with an id of ${id} has been deleted!`);
            }
        });
    });



module.exports = {
    getSubs,
    get_memberSubs,
    getSub,
    addSub,
    uptSub,
    delSub,
};
