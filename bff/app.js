import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';

const app = express();
const baseUrl = 'https://query2.finance.yahoo.com/v8/finance/chart/PETR4.SA?interval=1d&range=30d';

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(baseUrl);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({message: err});
  }
});

app.listen(8000, () => {
  console.log('server is running');
});