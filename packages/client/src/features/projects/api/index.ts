import { apiClient } from '../../../../axiosConfig.ts';

export const getProjects = async () => await apiClient('/projects');

export const getProjectDetail = async (id: string) =>
  await apiClient(`/projects/${id}`);
