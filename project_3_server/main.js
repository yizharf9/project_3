require("./models/DBconfig");

const exp = require("express");
const cors = require("cors");

const app = exp();

app.use(exp.json());
app.use(cors());

const users_router = require("./routers/users_router");
const members_router = require("./routers/members_router");
const movies_router = require("./routers/movies_router");

app.use("/api/users", users_router);
app.use("/api/members", members_router);
app.use("/api/movies", movies_router);
app.use("/api/movies", movies_router);

app.listen(8000);
