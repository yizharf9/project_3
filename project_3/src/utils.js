const axios = require("axios").default;

const users_url = "http://localhost:8000/api/users/";
const movies_url = "http://localhost:8000/api/movies/";

const get_users = async (id = "", name) => {
    if (id !== "") {
        let { data: users } = await axios.get(`${users_url}name/${name}`);
        return users;
    } else {
        let { data: user } = await axios.get(`${users_url}${id}`);
        return user;
    }
};

const getMovies = async () => {
    let { data: movies } = await axios.get(movies_url);
    console.log(movies);
    return movies;
};

const login = async ({ Username: U, Password: P }) => {
    let { data } = await axios.post(`${users_url}login`, {
        Username: U,
        Password: P,
    });
    return data;
};

export { get_users, getMovies, login };
