const axios = require("axios").default;

const users_url = "http://localhost:8000/api/users/";
const movies_url = "http://localhost:8000/api/movies/";
const members_url = "http://localhost:8000/api/members/";
const subs_url = "http://localhost:8000/api/subscriptions/";
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

const Movies = {
    getMovies: async () => {
        let { data: movies } = await axios.get(`${movies_url}`);
        console.log(movies);
        return movies;
    },

    getMovie: async (id) => {
        let { data: movies } = await axios.get(`${movies_url}${id}`);
        // console.log(movies);
        return movies;
    },

    add_movie: async (newMovie) => {
        let { data } = await axios.post(`${movies_url}`, newMovie);
        return data;
    },

    upt_movie: async (id, newMovie) => {
        let { data } = await axios.put(`${movies_url}${id}`, newMovie);
        return data;
    },

    delete_movie: async (id) => {
        let { data } = await axios.delete(`${movies_url}${id}`);
        return data;
    },
};

const Members = {
    get_Members: async () => {
        let { data: Members } = await axios.get(`${members_url}`);
        console.log(Members);
        return Members;
    },
    get_Member: async (id) => {
        let { data: Members } = await axios.get(`${members_url}${id}`);
        // console.log(Members);
        return Members;
    },
    add_Member: async (newMember) => {
        let { data } = await axios.post(`${members_url}`, newMember);
        return data;
    },
    upt_Member: async (id, newMember) => {
        let { data } = await axios.put(`${members_url}${id}`, newMember);
        return data;
    },
    delete_Member: async (id) => {
        let { data } = await axios.delete(`${members_url}${id}`);
        return data;
    },
};

const Subs = {
    get_Subs: async () => {
        let { data: Subs } = await axios.get(`${subs_url}`);
        console.log(Subs);
        return Subs;
    },
    get_Sub: async (id) => {
        let { data: Subs } = await axios.get(`${subs_url}${id}`);
        // console.log(Subs);
        return Subs;
    },
    get_memberSubs: async (memberid) => {
        let { data: Subs } = await axios.get(`${subs_url}member/${memberid}`);
        // console.log(Subs);
        return Subs;
    },
    add_Sub: async (newSub) => {
        let { data } = await axios.post(`${subs_url}`, newSub);
        return data;
    },
    upt_Sub: async (id, newSub) => {
        let { data } = await axios.put(`${subs_url}${id}`, newSub);
        return data;
    },
    delete_Sub: async (id) => {
        let { data } = await axios.delete(`${subs_url}${id}`);
        return data;
    },
};

export { genres, get_users, login, Movies, Members, Subs };
