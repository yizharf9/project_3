const { model, Schema } = require("mongoose");

const Subscription = new Schema(
    {
        MovieID : String,
        MemberID: String,
        Date: String,
    },
    { versionKey: false }
);

module.exports = model("subs", Subscription);