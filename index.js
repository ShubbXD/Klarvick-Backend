const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

let sensorData = {
  mq7: null,
  mq135: null,
  ecg: null,
  dht11: {
    temperature: null,
    humidity: null
  }
};

app.post('/upload', (req, res) => {
  sensorData = req.body;
  console.log('Data received:', sensorData);
  res.json({ message: 'Data saved' });
});

app.get('/sensors', (req, res) => {
  res.json(sensorData);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
