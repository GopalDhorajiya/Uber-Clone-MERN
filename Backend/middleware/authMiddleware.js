import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || '123456';

export const validateToken = (req,res,next) =>
{
    const token = req.header('Authorization').split(" ")[1];
    // console.log(token);
    if(!token)
    {
        return  res.status(401).json({massage : "Access token reqierd"});   
    }
    try {
        const decode = jwt.verify(token,JWT_SECRET);
        req.user = decode;
        // console.log(req.user);
        next();
    } catch (error) {
        return res.status(403).json({massage:'Invalid or Expired Token'});
    }
}
