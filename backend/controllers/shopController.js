const shopModel = require('../models/shopModel');

exports.getShop = async (req, res, next) => {
//   console.log('entered the function');
console.log(req.query.category);
const category = req.query.category ? {
  category: {
      $regex: req.query.category, //regular expression
      $options: 'i' //case sensitive 
  }
} : {};
  const shops = await shopModel.find(category);
  res.json({
    message: 'shop data is coming',
    shops,
  });
};

exports.getSingleShop=async(req,res,next)=>{
    console.log('entered the single function');
    console.log(req.params.id);

    const shop=await shopModel.findById(req.params.id);
    res.json({
        message:"fetched single data",
        shop,
    })
  
}

// exports.getSingleShop = async (req, res, next) => {
//   console.log('entered the single function');
//   try {
//     const shop = await shopModel.findById(req.params.id);
//     if (!shop) {
//       return res.status(404).json({
//         message: 'Shop not found',
//       });
//     }
//     res.json({
//       message: 'shop data is coming',
//       shop,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: 'Server error',
//     });
//   }
// };
