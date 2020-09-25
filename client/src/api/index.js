import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const insertVehicle = payload => api.post(`/vehicle`, payload)

const apis = {
    insertVehicle,
}
export default apis;
