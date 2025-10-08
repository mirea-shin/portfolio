import { apiAdmin } from '../../../axiosConfig';

import type { AboutRequest } from 'shared';
import { ENDPOINTS } from 'shared';

const { ABOUT } = ENDPOINTS;
export const getAllAbout = async () => await apiAdmin.get(ABOUT);

export const getAbout = async (id: string) =>
  await apiAdmin.get(`${ABOUT}/${id}`);

export const postAbout = async (newAbout: AboutRequest) =>
  await apiAdmin.post(ABOUT, newAbout);

export const putAbout = async (editedAbout: AboutRequest, id: string) =>
  await apiAdmin.put(`${ABOUT}/${id}`, editedAbout);

export const deleteAbout = async (id: string) =>
  await apiAdmin.delete(`${ABOUT}/${id}`);

export const upadteFeaturedAbout = async (id: string) =>
  await apiAdmin.patch(`${ABOUT}/${id}/select`);
