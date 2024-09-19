import validator from 'validator'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js';

// Load environment variables
dotenv.config();

// Function to create JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Login user route
export  const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        console.log(email);
        console.log(password);
        
        let user = await User.findOne({ email: email });

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Incorrect password" });
        }

        let token = createToken(user._id);
        res.json({ success: true, token: token,message:"Successfully Logged In",user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// Create user route
export  const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        if(!name){
            return res.json({ success: false, message: "Name is required" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if(password.length<8){
            return res.json({success:false,message:"password must be greater than or equal to 8"})
        }

        // Check if user already exists
        let exist = await User.findOne({ email: email });
        if (exist) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Hash password
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);

        // Create new user instance
        let user = new User({
            name: name,
            email: email,
            password: hashedPassword,
        });

        // Save user to database
        const savedUser = await user.save();
        const token = createToken(savedUser._id);

        res.json({ success: true, token: token,message:"User Successfully Registered" ,});
        console.log('User saved');
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};