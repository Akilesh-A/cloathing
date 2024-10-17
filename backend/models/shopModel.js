const moongose=require('mongoose');
const shopSchema=new moongose.Schema({
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
});

const shopModel=moongose.model('shop',shopSchema);

module.exports=shopModel;