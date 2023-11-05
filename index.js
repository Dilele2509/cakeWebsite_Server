'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');

//const for routes
const categoryRoutes = require('./src/routes/categoryRoutes');
const feedbackRoutes = require('./src/routes/feedbackRoutes');
const manage_galleryRoutes = require('./src/routes/manage_galleryRoutes');
const order_detailRoutes = require('./src/routes/order_detailRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const productRoutes = require('./src/routes/productRoutes');
const roleRoutes = require('./src/routes/roleRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//link to the routes of each type
app.use('/', roleRoutes.routes);
app.use('/', userRoutes.routes);
app.use('/', categoryRoutes.routes);
app.use('/', feedbackRoutes.routes);
app.use('/', orderRoutes.routes);
app.use('/', manage_galleryRoutes.routes);
app.use('/', order_detailRoutes.routes);
app.use('/', productRoutes.routes);


app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});