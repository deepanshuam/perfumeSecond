

import { Schema, model } from "mongoose";

const productSchema = new Schema({
  
  id: Number,
  name: String,
  brand: String,
  description: String,
  price: Number,
  currency: String,
  image: String,
  available_sizes: [{
    size: String,
    price: Number
  }],
  longevity: String,
  sillage: String,
  occasion: [String],
  season: String,
  cruelty_free: Boolean,
  vegan: Boolean,
  author: { type: String, required: true }, 
  rating: { type: Number, required: true, min: 1, max: 5 }, 
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});


export default model('Product', productSchema);


