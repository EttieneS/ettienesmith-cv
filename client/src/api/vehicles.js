import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/',
})

export const createVehicle = payload => api.post(`vehicles/create`, payload);
export const getAllVehicles = () => api.get(`vehicles`);

const apis = {
  createVehicle,
  getAllVehicles,
}

export default apis;
