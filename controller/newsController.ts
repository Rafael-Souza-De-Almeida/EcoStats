import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

exports.save = async (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;

  if (!title || !content) {
    return res
      .status(400)
      .json({ error: "Título ou conteúdo são obrigatórios" });
  }

  try {
    const news = await prisma.news.create({
      data: {
        title,
        content,
        authorId,
      },
    });
    return res.status(201).json(news);
  } catch (error) {
    return res.json(400).json({ error: "erro ao criar o post" });
  }
};
