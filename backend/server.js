// Backend - Node.js + Express + MongoDB

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dbURI = 'mongodb://localhost:27017/raahi'; // MongoDB connection URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log(err));

// User model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);

// Ride model
const RideSchema = new mongoose.Schema({
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  passengerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  rideDate: { type: Date, required: true }
});
const Ride = mongoose.model('Ride', RideSchema);

// User routes
app.post('/api/users', (req, res) => {
  const user = new User(req.body);
  user.save().then(() => res.status(201).send(user)).catch(err => res.status(400).send(err));
});

// Ride routes
app.post('/api/rides', (req, res) => {
  const ride = new Ride(req.body);
  ride.save().then(() => res.status(201).send(ride)).catch(err => res.status(400).send(err));
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});