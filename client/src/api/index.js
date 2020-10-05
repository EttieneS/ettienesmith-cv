import axios from 'axios';

const api = axios.create({
    baseURL: 'mongodb+srv://ettienesmithcv:CjH1ro9aDyco1W7r@cluster0.mhunj.gcp.mongodb.net/vehicles?retryWrites=true&w=majority',
});

export const insertVehicle = payload => api.post(`/vehicle`, payload);
export const getAllVehicles = api.get('/vehicles');

const apis = {
    insertVehicle,
    getAllVehicles,
}
export default apis;
