import mongoose from 'mongoose';
import app from './app.js';
import config from './app/config/index.js';
const PORT = config.port;
const uri = config.mongoURI;
async function startServer() {
    try {
        // MongoDB connect
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully ok✅ mome chage');
        // Start server
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('❌ Server start failed:', error);
        process.exit(1);
    }
}
startServer();
