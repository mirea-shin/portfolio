import { apiClient } from '../../../../axiosConfig.ts';
import { ENDPOINTS } from 'shared';

const { PROJECTS } = ENDPOINTS;

export const getAllProject = async () => await apiClient(PROJECTS);

export const getProject = async (id: string) =>
  await apiClient(`${PROJECTS}/${id}`);
