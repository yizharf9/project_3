const axios = require("axios").default;

const users_url = "http://localhost:8000/api/users/";
const movies_url = "http://localhost:8000/api/movies/";
const genres = [
    "Drama",
    "Science-Fiction",
    "Thriller",
    "Action",
    "Crime",
    "Horror",
    "Romance",
    "Adventure",
    "Espionage",
    "Music",
    "Mystery",
    "Supernatural",
    "Fantasy",
    "Family",
];

const get_users = async (id = "", name) => {
    if (id !== "") {
        let { data: users } = await axios.get(`${users_url}name/${name}`);
        return users;
    } else {
        let { data: user } = await axios.get(`${users_url}${id}`);
        return user;
    }
};

const login = async ({ Username: U, Password: P }) => {
    let { data } = await axios.post(`${users_url}login`, {
        Username: U,
        Password: P,
    });
    return data;
};

const getMovies = async () => {
    let { data: movies } = await axios.get(`${movies_url}`);
    console.log(movies);
    return movies;
};

const getMovie = async (id) => {
    let { data: movies } = await axios.get(`${movies_url}${id}`);
    // console.log(movies);
    return movies;
};

const add_movie = async (newMovie) => {
    let { data } = await axios.post(`${movies_url}`, newMovie);
    return data;
};

const upt_movie = async (id, newMovie) => {
    let { data } = await axios.put(`${movies_url}${id}`, newMovie);
    return data;
};

const delete_movie = async (id) => {
    let { data } = await axios.delete(`${movies_url}${id}`);
    return data;
};

export {
    genres,
    get_users,
    login,
    getMovies,
    getMovie,
    add_movie,
    upt_movie,
    delete_movie,
};
