import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createCustomer = payload => api.post(`/customers/create`, payload);
export const getAllCustomers = () => api.get(`/customers`);

const apis = {
  createCustomer,
  getAllCustomers,
}

export default apis;
