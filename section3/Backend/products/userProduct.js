const { Schema, product } = require('../connection');

const mySchema = new Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    createdAt: { type: Date, default: Date.now },
});

const Product = product('Product', mySchema);