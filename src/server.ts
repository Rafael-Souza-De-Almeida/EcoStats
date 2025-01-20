import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const express = require("express");

const port = 8080;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.post("/post", async (req: Request, res: Response) => {
  const { title, content, published } = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        published: published || false,
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o post" });
  }
});

app.listen(port, () => console.log("Servidor iniciado"));
