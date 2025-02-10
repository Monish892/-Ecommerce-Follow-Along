const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({

    name:{
      type:String,
      required:[true,'product name is required'],
      trim:true,
      minlength:[3,'product name must be at least 3 characters']
  
    },
  
    description:{                                       
      type:String,
      required:[true,'product description is required'],
      trim:true,
      maxlength:[500,"description cannot exceed 500 characters"]
  
  
    },
    
    price:{
      type:Number,
      required:[true,"product price is requiered"],
      min:[0,"price must be greater than or equal to zero"],
  
    },

    
  
    stock:{
      type:Number,
      required:[true,"product stock is required"],
      min:[0,"price must be greater than 0 or equal to zero"],
    },

    category:{
        type:String,
        required:true,


    },
  
    imageurl:{
      type:String,
      required:[true,"procuct image url is required"],
      validate:{
        validator:function (v){
          return  /^(http|https):\/\/[^\s]+$/.test(v);
        },
        message:"Invalid URL format"
      },
    },

    
  
  
  
  
  });
  
  
  module.exports=mongoose.model('Product',ProductSchema);