const { model, Schema } = require("mongoose");

const Movie = new Schema(
    {
        Title: String,
        Premiere: String,
        Genres: [String],
        Image: String,
    },
    { versionKey: false }
);

module.exports = model("movies", Movie);
