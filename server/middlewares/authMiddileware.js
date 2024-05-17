const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const asyncHandler = require ("express-async-handler");


const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            console.log("Token:", token);

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            console.log("Decoded:", decoded);

            req.user = await User.findById(decoded.id).select("-password");

            console.log("Authenticated User:", req.user);

            next();
        } catch (e) {
            console.error("Token Verification Error:", e);
            res.status(401);
            throw new Error("Not authorized, token failed!");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, token missing!");
    }
});


module.exports = protect