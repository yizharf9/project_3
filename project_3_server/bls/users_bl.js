const User = require("../models/user_model");
//#region 
const getUsers = () =>
    new Promise((resolve, reject) => {
        User.find({}, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const getUser = (id) =>
    new Promise((resolve, reject) => {
        User.findById(id, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const getUser_byName = (_Name) =>
    new Promise((resolve, reject) => {
        User.find({ Fullname: _Name }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const login = ({_Username,_Password}) =>
    new Promise((resolve, reject) => {
        User.find({ Username:_Username,Password:_Password}, (err, data) => {
            if (err) {
                reject('invalid input!');
            } else {
                resolve(data);
            }
        });
    });

//#endregion

const addUser = (obj) =>
    new Promise((resolve, reject) => {
        let newUser = new User(obj);
        newUser.save((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve("new user created!");
            }
        });
    });

const uptUser = (id, obj) =>
    new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, obj, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(`user with an id of ${id} has been updated!`);
            }
        });
    });

const delUser = (id) =>
    new Promise((resolve, reject) => {
        User.findByIdAndDelete(id, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(`user with an id of ${id} has been deleted!`);
            }
        });
    });

module.exports = {
    getUsers,
    getUser,
    getUser_byName,
    addUser,
    uptUser,
    delUser,
    login
};
