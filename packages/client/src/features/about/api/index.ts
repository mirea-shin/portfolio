import { apiClient } from '../../../../axiosConfig.ts';
import { ENDPOINTS } from 'shared';

const { ABOUT } = ENDPOINTS;

export const getFeaturedAbout = async () =>
  await apiClient(`${ABOUT}/featured`);
