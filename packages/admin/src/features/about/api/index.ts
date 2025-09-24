import { apiAdmin } from '../../../axiosConfig';

import type { AboutRequest } from 'shared';

export const getAllAbout = async () => await apiAdmin.get('/about');

export const getAbout = async (id: string) =>
  await apiAdmin.get(`/about/${id}`);

export const postAbout = async (newAbout: AboutRequest) =>
  await apiAdmin.post(`/about`, newAbout);

export const putAbout = async (editedAbout: AboutRequest, id: string) =>
  await apiAdmin.put(`/about/${id}`, editedAbout);

export const deleteAbout = async (id: number) =>
  await apiAdmin.delete(`/about/${id}`);

export const upadteFeaturedAbout = async (id: number) =>
  await apiAdmin.patch(`/about/${id}`);
