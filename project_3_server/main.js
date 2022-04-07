const exp = require("express");
const cors = require("cors");
const app = exp();
const users_router = require("./routers/users_router");

app.use(cors());

app.listen(8000);
