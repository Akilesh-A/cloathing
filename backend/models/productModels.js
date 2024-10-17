const mongoose=require('mongoose');

let productSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    images:[{
        images:String
    }],
    ratings:String,
    category:String,
    seller:String,
    stock:String,
    reviews:String,
    createdAt:Date,
})

const productModel=mongoose.model('Product',productSchema);

module.exports=productModel 