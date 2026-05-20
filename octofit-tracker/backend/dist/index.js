import express from 'express';
import mongoose from 'mongoose';
const app = express();
const PORT = Number(process.env.PORT ?? 8000);
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit';
app.use(express.json());
app.get('/', (_req, res) => {
    res.json({ status: 'OctoFit Tracker backend running', port: PORT });
});
app.listen(PORT, async () => {
    console.log(`Backend listening on http://localhost:${PORT}`);
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`Connected to MongoDB at ${MONGO_URI}`);
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
});
