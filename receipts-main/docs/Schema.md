## Note

1. Only we the team members can access it, so we'll implement authentication either via `firebase`, `auth.js` or some other way
2. In admin dashboard we should be able to see email sent and receipts generated lists and simple analytics
3. Also be able to select which template to give out

Considering all this, we can adjust the following schemas:
```js
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passhash: { type: String, required: true },
  lastLogin: { type: Date },
  createdAt: { type: Date, default: Date.now },
});
```
```js
const Events = new Schema({
  eventId: { type: Number, required: true, unique: true },
  type: { type: String, enum: ["seminar", "workshop", "other"] },
  name: { type: String, required: true },
  desc: { type: String },
  items: [{
    name: { type: String, required; true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  }],
  totalPurchases: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  purchases: [{
    purchaseId: { type: String, required: true, unique: true }
    user: {
      userId: { type: String, required: true },
      name: { type: String },
      email: { type: String },
      phone: { type: String }
    },
    paymentMethod: { type: String },
    price: { type: Number, required: true },
    itemName: { type: String, required: true },
    itemDesc: { type: String },
    quantity: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
  }],
  itemAnalytics: [{
    itemName: { type: String },
    totalSold: { type: Number },
    totalRevenue: { type: Number }
  }],
});
```
```js
const receiptSchema = new Schema({
  receiptNumber: { type: String, required: true, unique: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String }
  },
  items: [{
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
  }],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String },
  createdAt: { type: Date, default: Date.now },
  emailLog: [{
    emailSentTo: { type: String, required: true },
    status: { type: String, enum: ['sent', 'failed'], required: true },
    sentAt: { type: Date, default: Date.now }
  }]
});
```

Not sure how to select templates