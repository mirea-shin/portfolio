import { apiAdmin } from '../../../axiosConfig';

import type { ProjectRequest } from 'shared';

export const getAllProject = async () => await apiAdmin.get('/projects');

export const getProject = async (id: string) =>
  await apiAdmin.get(`/projects/${id}`);

export const postProject = async (newProject: ProjectRequest) =>
  await apiAdmin.post(`/projects`, newProject);

export const putProject = async (editedProject: ProjectRequest, id: string) =>
  await apiAdmin.put(`/projects/${id}`, editedProject);

export const deleteProject = async (id: string) =>
  await apiAdmin.delete(`/projects/${id}`);
