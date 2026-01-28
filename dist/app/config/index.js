import dotenv from 'dotenv';
dotenv.config();
const config = {
    port: Number(process.env.PORT) || 3000,
    mongoURI: process.env.MONGO_URI,
    bcrypt_Salt: process.env.bcrypt_Salt
};
export default config;
