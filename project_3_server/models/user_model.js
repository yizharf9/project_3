const { model, Schema } = require("mongoose");

const User = new Schema(
    {
        Fullname: String,
        Username: String,
        Password: String,
    },
    { versionKey: false }
);

module.exports = model("users", User);
