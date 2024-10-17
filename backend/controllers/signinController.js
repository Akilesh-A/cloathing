// const signinModel = require("../models/signinModel");

// exports.userSignin = async (req, res, next) => {
//     try {
//         const {username}=req.body
//         console.log(username);
//         const result = await signinModel.find({username});


//         res.json({
//             message: 'User Logged in successfully',
//             status: 200,
        
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: 'Error logging in',
//             status: 500,
//         });
//     }
// };



const signinModel=require("../models/signinModel")
 
 exports.userSignin =  async(req, res, next) => {
    
    console.log(req.body);
try{
    const {email,password}=req.body
    const signin= await signinModel.create({email,password})


    console.log("enojdohwd");
    res.json({
        message: 'User Logged in successfully',
        status: 201,
        signin
    })

}catch(err){
    console.log(err);
}

  
   
 }