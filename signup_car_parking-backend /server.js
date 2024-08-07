const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('../signup_car_parking-backend /routers/signup');
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://smartHome:smartHome123@atlascluster.mkha3fz.mongodb.net/LotLinkParkHub?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});