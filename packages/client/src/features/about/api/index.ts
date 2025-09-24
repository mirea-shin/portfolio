import { apiClient } from '../../../../axiosConfig.ts';

export const getFeaturedAbout = async () => await apiClient('/about/featured');
