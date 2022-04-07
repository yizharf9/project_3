require("./models/DBconfig");

const exp = require("express");
const cors = require("cors");

const app = exp();

app.use(exp.json());
app.use(cors());

const users_router = require("./routers/users_router");

app.use("/api/users", users_router);

app.listen(8000);
