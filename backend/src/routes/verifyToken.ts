import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC as string, (err,user)=>{
            if(err) res.status(403).json("Token inválido");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("Falha na autenticação");
    }
};

export const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("Falha na autenticação");
        }
    });
};

export const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("Falha na autenticação");
        }
    });
};

