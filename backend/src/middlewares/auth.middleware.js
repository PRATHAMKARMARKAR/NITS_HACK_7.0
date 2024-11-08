import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            throw new ApiError(401, "Unauthorized Request.");
        }
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select("-password");
        if (!user) {
            throw new ApiError(404, "Invalid Token.");
        }
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token.");
    }
});

export default verifyJWT;