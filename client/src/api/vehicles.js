import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/vehicles',
})

export const create = payload => api.post(`/create`, payload);
export const getAllVehicles = () => api.get(`vehicles`);
export const deleteById = id => api.delete(`/delete/_id=${id}`);

const apis = {
  create,
  getAllVehicles,
  deleteById,
}

export default apis;
