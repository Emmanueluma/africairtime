// index.js

const express = require('express');
const bodyParser = require('body-parser');
const AfricasTalking = require('africastalking');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
console.log('hello world')
// Replace these with your actual credentials
const apiKey = 'b40d6b796a74d02712abb97be68b5d78065318dca0e12fb6f63b61ba9251b784';
const username = 'afr';

const africasTalking = AfricasTalking({
  apiKey,
  username
});
app.get('/send-airtime',  (req, res) => {
    res.write("hello worls")
})
  
app.post('/send-airtime', async (req, res) => {
    console.log(req.body)
  try {
    const {phoneNumber, amount} = req.body;
    const options = {
      recipients: [
        {
          phoneNumber,
          currencyCode: 'NGN', // Replace with the appropriate currency code
          amount
        }
      ]
    };

    const response = await africasTalking.AIRTIME.send(options);
    res.json(response);
  } catch (error) {
    console.error('Error sending airtime:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
