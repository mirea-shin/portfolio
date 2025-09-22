import { Request, Response } from 'express';

import * as AboutData from '../data/about';

// GET

export const getAll = async (req: Request, res: Response) => {
  const data = await AboutData.findAll();
  return res.status(200).json({ data });
};

export const getById = async (req: Request, res: Response) => {
  const data = await AboutData.findById(req.params.id);
  return res.status(200).json({ data });
};

export const getFeatured = async (req: Request, res: Response) => {
  console.log('???????');
  const data = await AboutData.getFeatured();
  console.log(data);
  return res.status(200).json({ data });
};

// POST

export const create = async (req: Request, res: Response) => {
  const newAbout = await AboutData.create(req.body);
  return res.status(201).json({ newAbout });
};

// PATCH

export const select = async (req: Request, res: Response) => {
  const selectedAbout = await AboutData.setFeatured(req.params.id);
  return res.status(200).json({ selectedAbout });
};

// PUT

export const update = async (req: Request, res: Response) => {
  const updatedAbout = await AboutData.update(req.params.id, req.body);
  return res.status(200).json({ updatedAbout });
};

// DELETE

export const remove = async (req: Request, res: Response) => {
  await AboutData.remove(req.params.id);

  return res.sendStatus(204);
};
