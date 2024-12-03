import mongoose from 'mongoose';

const Connection = async (USERNAME,PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@blog-app.facwo.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error.message);
    }
};

export default Connection;