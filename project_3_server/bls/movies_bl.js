const Movie = require("../models/movies_model");
const subs_bl = require("./subs_bl");

const getMovies = () =>
    new Promise((resolve, reject) => {
        Movie.find({}, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const getMovie = (id) =>
    new Promise((resolve, reject) => {
        Movie.findById(id, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const getMovie_byName = (_Name) =>
    new Promise((resolve, reject) => {
        Movie.find({ Fullname: _Name }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

const addMovie = (obj) =>
    new Promise((resolve, reject) => {
        let newMovie = new Movie(obj);
        newMovie.save((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve("new Movie created!");
            }
        });
    });

const uptMovie = (id, obj) =>
    new Promise((resolve, reject) => {
        Movie.findByIdAndUpdate(id, obj, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Movie with an id of ${id} has been updated!`);
            }
        });
    });

const delMovie = (id) => {
    subs_bl.del_movieSubs(id);
    return new Promise((resolve, reject) => {
        Movie.findByIdAndDelete(id, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Movie with an id of ${id} has been deleted!`);
            }
        });
    });
};

module.exports = {
    getMovies,
    getMovie,
    getMovie_byName,
    addMovie,
    uptMovie,
    delMovie,
};
