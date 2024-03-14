const User = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const SECRET_KEY = "NOTESAPI";

const signup = async (req,res)=>{
    try {
        
        const { name, email, password } = req.body;

       
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); 


        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });


        await newUser.save();
      
        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error in signup:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

const signin = async (req,res)=>{
    try {

        const { email, password } = req.body;

       
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

       
        return res.status(200).json({ token ,message: 'successfully logged in'});
    } catch (error) {
        console.error('Error in signin:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};







module.exports = {signup,signin};
