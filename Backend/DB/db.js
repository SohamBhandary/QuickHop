import mongoose from "mongoose";


function connectTODb(){
    
    mongoose.connect(process.env.DB_CONNECT).then(()=>{console.log("Db connected");
    }).catch((err)=>{console.log(err);
    })
}
export default connectTODb;
