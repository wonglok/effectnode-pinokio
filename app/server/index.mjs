// server/index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
const app = express();
const PORT = Number(Number(process.env.PORT || 5173) + 1);

app.use(cors())
app.use(express.json()); // For parsing JSON request bodies

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});