const Customer = require('../models/customer');

const createCustomer = (req, res) => {
  const body = req.body;

  if (!body){
    return res.status(400).json({
      success: false,
      error: 'You must provide a customer',
    });
  }

  const customer = new Customer(body);

  customer.save()
    .then(() => res.json('Customer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

const getAllCustomers = async (req, res) => {
  await Customer.find({}, (err, customers) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!customers.length) {
          return res
              .status(404)
              .json({ success: false, error: 'Customer not found' })
      }
      return res.status(200).json({ success: true, data: customers })
  }).catch(err => console.log(err))
}

module.exports = {
  createCustomer,
  getAllCustomers,
}
