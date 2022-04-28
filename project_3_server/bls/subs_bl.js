const Sub = require("../models/Subs_model");
const movie_bl = require("./movies_bl");

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

const get_movieSubs = (movieid) =>
    new Promise((resolve, reject) => {
        Sub.find({ MovieID: movieid }, (err, data) => {
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

const del_memberSubs = async (memberid) => {
    let memberSubs = await get_memberSubs(memberid);
    memberSubs.forEach((sub) => {
        delSub(sub._id);
    });
    return `all subscriptions deleted for member with an id of ${memberid}`;
};

const del_movieSubs = async (movieid) => {
    let MovieSubs = await get_movieSubs(movieid);
    MovieSubs.forEach((sub) => {
        delSub(sub._id);
    });
    return `all subscriptions deleted for movie with an id of ${movieid}`;
};

module.exports = {
    getSubs,
    get_memberSubs,
    get_movieSubs,
    getSub,
    addSub,
    uptSub,
    delSub,
    del_memberSubs,
    del_movieSubs,
};
