'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


//const for routes
const categoryRoutes = require('./src/routes/categoryRoutes');
const feedbackRoutes = require('./src/routes/feedbackRoutes');
const manage_galleryRoutes = require('./src/routes/manage_galleryRoutes');
const order_detailRoutes = require('./src/routes/order_detailRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const productRoutes = require('./src/routes/productRoutes');
const roleRoutes = require('./src/routes/roleRoutes');
const userRoutes = require('./src/routes/userRoutes');
const loginRoutes = require('./src/routes/loginRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

//link to the routes of each type
app.use('/api/', loginRoutes.routes);
app.use('/api/', roleRoutes.routes);
app.use('/api/', userRoutes.routes);
app.use('/api/', categoryRoutes.routes);
app.use('/api/', feedbackRoutes.routes);
app.use('/api/', orderRoutes.routes);
app.use('/api/', manage_galleryRoutes.routes);
app.use('/api/', order_detailRoutes.routes);
app.use('/api/', productRoutes.routes);


app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});