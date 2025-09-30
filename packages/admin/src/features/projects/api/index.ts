import { apiAdmin } from '../../../axiosConfig';

import type { ProjectRequest } from 'shared';
import { ENDPOINTS } from 'shared';

const { PROJECTS } = ENDPOINTS;

export const getAllProject = async () => await apiAdmin.get(PROJECTS);

export const getProject = async (id: string) =>
  await apiAdmin.get(`${PROJECTS}/${id}`);

export const postProject = async (newProject: ProjectRequest) =>
  await apiAdmin.post(PROJECTS, newProject);

export const putProject = async (editedProject: ProjectRequest, id: string) =>
  await apiAdmin.put(`${PROJECTS}/${id}`, editedProject);

export const deleteProject = async (id: string) =>
  await apiAdmin.delete(`${PROJECTS}/${id}`);
