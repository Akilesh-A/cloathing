
const mongoose=require('mongoose');
const connectDatabase=()=>{
mongoose.connect(process.env.DB_URL).then((a)=>{
    console.log('mongo db connnected : '+a.connection.host);
    

})


}

module.exports=connectDatabase;