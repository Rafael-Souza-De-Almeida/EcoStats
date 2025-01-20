import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const newsController = require("../controller/newsController");
const express = require("express");

const port = 8080;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post("/news", newsController.save);

app.listen(port, () => console.log("Servidor iniciado"));
