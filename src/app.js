const express= require('express');
const authRoutes = require("./routes/auth.routes")
const cookieParser = require('cookie-parser');

const postRoutes = require("./routes/post.routes")

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes ); // /api/auth is a prefix to acess the api

module.exports = app;

