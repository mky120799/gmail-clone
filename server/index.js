import express from "express";
import Connection from "./database/db";
// const Express = require('express');
const app = express();

const PORT = 8000;
Connection();
app.listen(PORT, ()=> console.log(`Server is started on PORT ${PORT}`));

