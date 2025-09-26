import { Request, Response } from 'express';

import * as ProjectsData from '../data/projects';

// GET

export const getAll = async (req: Request, res: Response) => {
  const data = await ProjectsData.findAll();
  return res.status(200).json({ data });
};

export const getById = async (req: Request, res: Response) => {
  const data = await ProjectsData.findById(req.params.id);
  return res.status(200).json({ data });
};

// POST

export const create = async (req: Request, res: Response) => {
  const newProject = await ProjectsData.create(req.body);
  return res.status(201).json({ newProject });
};

// PUT

export const update = async (req: Request, res: Response) => {
  const updatedProject = await ProjectsData.update(req.params.id, req.body);
  return res.status(200).json({ updatedProject });
};

// DELETE

export const remove = async (req: Request, res: Response) => {
  await ProjectsData.remove(req.params.id);

  return res.sendStatus(204);
};
