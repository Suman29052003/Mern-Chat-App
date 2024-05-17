const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
    let token;
    
    // Log the entire headers to check for Authorization header
    console.log("Request Headers:", req.headers);
    
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            console.log("Token:", token);

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decoded:", decoded);

            req.user = await User.findById(decoded.id).select("-password");
            console.log("Authenticated User:", req.user);

            if (!req.user) {
                res.status(401);
                throw new Error("Not authorized, user not found!");
            }

            next();
        } catch (e) {
            console.error("Token Verification Error:", e.message);
            res.status(401);
            throw new Error("Not authorized, token failed!");
        }
    } else {
        console.log("Authorization header missing or incorrect format");
        res.status(401);
        throw new Error("Not authorized, token missing!");
    }
});

module.exports = protect;
