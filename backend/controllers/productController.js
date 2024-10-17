const productModel = require("../models/productModels");

// getting product API  -/api/v1/products

exports.getproducts = async (req, res, next) => {
  console.log(req.query.keyword);
const query=  req.query.keyword?{name:{
    $regex:req.query.keyword,
    $options:'i' // case insensitive search
  }}:{}
  let products = await productModel.find(query);

  res.json({
    success: true,
    message: "products fetched successfully",
    products,
  });
};

// getting single product API  -/api/v1/products/:id

exports.getSingleproducts = async (req, res, next) => {
  // console.log(req.params.id,'ID');

  try {
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      message: "Single products fetched successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error fetching single products",

    });
  }
};
