// Write database connections here

import moogoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;


// connect to mongodb
function connectToMongoDB() {
    moogoose.connect(DATABASE_URL);

    moogoose.connection.on('connected', () => {
        console.log('Connected to MongoDB successfully');
    });

    moogoose.connection.on('error', (err) => {
        console.log('Error connecting to MongoDB', err);
    });
}

export default connectToMongoDB;