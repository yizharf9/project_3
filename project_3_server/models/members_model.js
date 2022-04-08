const { model, Schema } = require("mongoose");

const Member = new Schema(
    {
        Fullname : String,
        Email: String,
        City: String,
    },
    { versionKey: false }
);

module.exports = model("members", Member);
