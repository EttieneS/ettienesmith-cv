const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.VCAP_APP_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Ettiene Smith technical C.V');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
