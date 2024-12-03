import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from "../model/user.js";
import Token from "../model/token.js";

dotenv.config();

export const signupUser = async (request, response) => {
    try {
        // const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        const user = {
            username: request.body.username,
            name: request.body.name,
            password: hashedPassword
        };
        
        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successful', user: newUser });
    } catch (error) {
        console.error('Signup error:', error); 
        return response.status(500).json({ msg: 'Error while signing up' });
    }
};

export const loginUser = async (request, response) => {
    const user = await User.findOne({ username: request.body.username });
    // Find user by username
    if (!user) {
        return response.status(400).json({ msg: 'Invalid username or password' });
    }
    
    try {
        // Verify the password
        const isPasswordMatch = await bcrypt.compare(request.body.password, user.password);
        if (isPasswordMatch) {    
            // Generate JWT tokens
            const accessToken = jwt.sign(
                { id: user._id, username: user.username },
                process.env.ACCESS_SECRET_KEY,
                { expiresIn: '15m' }
            );
            
            const refreshToken = jwt.sign(
                { id: user._id, username: user.username },
                process.env.REFRESH_SECRET_KEY
            );

            const newToken = new Token({ userId: user._id, token: refreshToken });
            await newToken.save();
            return response.status(200).json({
                msg: 'Login successful',
                accessToken: accessToken,
                refreshToken: refreshToken,
                name: user.name,
                username: user.username,
            });

        } else {
            return response.status(400).json({ msg: 'Invalid username or password' });
        }            
    }
        
        // // Save or update the refresh token in the database
        // const existingToken = await Token.findOne({ userId: user._id });
        // if (existingToken) {
        //     // Update the existing refresh token
        //     existingToken.token = refreshToken;
        //     await existingToken.save();
        // } else {
        //     // Create a new refresh token
        //     await newToken.save();
        // }

        // Respond with tokens and user details
    catch (error) {
        console.error('Error during login:', error.message);
        return response.status(500).json({ msg: 'Error while logging in' });
    }
};
