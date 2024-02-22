import mongoose from 'mongoose'

const visitorSchema = new mongoose.Schema({
    visitors:Number,
    premiumUsers:Number,
    location:String,
    device:String,
    month:String
})

export const Visitor = mongoose.models.visitor || mongoose.model('visitor',visitorSchema);