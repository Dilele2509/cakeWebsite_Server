'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const { fileURLToPath } = require("url");
const path = require("path");


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
app.use(cors({
  origin: 'http://cakeshop.gun.vn:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

//file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets/images/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });
const userController = require('./src/controllers/userController'); 
const productController = require('./src/controllers/productController');

//link to the routes of each type
app.use("/public", express.static(path.join(__dirname, "public")));
app.post('/api/add-product', upload.single("thumbnail"), productController.addProduct);
app.post('/api/user/upload/', upload.single("avatar"), userController.uploadAvatar);
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
  console.log('app listening on url http://cakeshop.gun.vn:' + config.port )
});