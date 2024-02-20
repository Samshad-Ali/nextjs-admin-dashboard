import mongoose from 'mongoose';

const productShema = new mongoose.Schema({
    name:String,
    price:Number,
    visitors:Number,
    sales:Number,
    month:String
});

export const Product = mongoose.models.product || mongoose.model('product',productShema
)