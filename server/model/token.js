import mongoose from "mongoose";

const tokenSchema = mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    token: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        expires: '30d' 
    }
});

const Token = mongoose.model('Token', tokenSchema);

export default Token;
