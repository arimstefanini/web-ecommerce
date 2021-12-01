import { Schema, model } from 'mongoose';

const ProductSchema = new Schema(
    {
        title:{type: String, required: true, unique: true},
        desc:{type:String, required:true},
        img:{type:String, required:true},
        categories:{type:Array},
        size:{type:String},
        color:{type:String},
        price:{type:Number, required:true},
        
    },
    { timestamps:true }
);

module.exports = model("Product", ProductSchema)