import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationCode.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";


export const signup = async (req, res) => {
    // Here you would typically handle user registration logic
    // such as validating input, hashing passwords, and saving the user to the database.
    // For now, we will just send a response.
    const { email, password, name } = req.body; 

    try {
        if(!email || !password || !name) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userAlreadyExists = await User.findOne({email});

        if(userAlreadyExists) {
            return res.status(400).json({success:false ,message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const verificationToken = generateVerificationToken();
        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
        });

        await user.save();


        // jwt
        generateTokenAndSetCookie(res, user._id);

        res.status(201).json({ success: true, message: "User registered successfully", user: {
            ...user._doc,
            password: undefined, 
    }});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
}
export const login = async (req, res) => {
    res.send("login route");
}
export const logout = async (req, res) => {
    res.send("logout route");
}