import { Router } from "express";
import {UserSchema} from "../models/User";
import {AES} from "crypto-js";
import jwt from "jsonwebtoken";

const router = Router();

//REGISTER
router.post("/register", async (req,res)=>{
    
    const newUser = new UserSchema({
        username:  req.body.username,
        email: req.body.email,
        password: AES.encrypt(
            req.body.password, 
            process.env.PASS_SEC
        ).toString(),
    });

    try{
        const saveUser = await newUser.save();
        res.status(201).json(saveUser)
    }catch(err){
        res.status(500).json(err)
    }
});

//LOGIN
router.post("/login", async (req,res)=>{
    try{
        const user = await UserSchema.findOne({ username: req.body.username });
        !user && res.status(401).json("Senha ou usurário incorretos!");

        const hashPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const OriginalPassword = hashPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password &&
            res.status(401).json("Senha ou usurário incorretos!");

        const acessToken = jwt.sign({
            id:user._id, 
            isAdmin: user.isAdmin
        }, process.env.JWT_SEC,
            {expiresIn:"3d"}
        );

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, acessToken});

    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router