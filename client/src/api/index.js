import axios from 'axios';

const api = axios.create({
    baseURL: 'mongodb+srv://ettienesmithcv:CjH1ro9aDyco1W7r@cluster0.mhunj.gcp.mongodb.net/vehicles?retryWrites=true&w=majority'
});

export const insertVehicle = payload => api.post(`/views/vehicles/create`, payload);
export const getAllVehicles = api.get(`/vehicles/list`);

const apis = {
    insertVehicle,
    getAllVehicles,
}
export default apis;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ettienesmithcv:CjH1ro9aDyco1W7r@cluster0.mhunj.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("vehicles").collection("vehicles");
//   // perform actions on the collection object
//   client.close();
// });
