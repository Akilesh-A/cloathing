const userModel = require('../models/userModel');

exports.userLogin = async(req, res, next) => {
  console.log(req.body.name);

  try{
    const{firstname,lastname,email,password}=req.body;
    const newUser =await userModel.create({firstname,lastname,email,password})
    res.json({
      message: 'User Logged in successfully',
      status:201,
      newUser
     
    });

  }catch(err){
    console.log(err);
  }

  

 


};
