// sk_test_51NP9trSIqOqHlxHglCcQBU3FVOQcnJ8zhdn9SL9WLOGrpHdimVQtM10KgZOhLBBNWjIAots4M1vKYsugJsRs4G0p00ebbpjCDs

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51NP9trSIqOqHlxHglCcQBU3FVOQcnJ8zhdn9SL9WLOGrpHdimVQtM10KgZOhLBBNWjIAots4M1vKYsugJsRs4G0p00ebbpjCDs');

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req,res)=> {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push(
      {
        price: item.priceId,
        quantity: 1
      }
    )
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://127.0.0.1:5173/success',
    cancel_url: 'http://127.0.0.1:5173/fail'
  });

  res.send(JSON.stringify({
    url: session.url
  }));

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server listening on ${PORT}`));
