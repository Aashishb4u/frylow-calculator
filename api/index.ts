import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const googleUrl = 'https://script.google.com/macros/s/AKfycbx0gDdsZqdAmSk8aMPIc2i76IhcC9xS5qjkuoOGSXeRvFZNrmul6xtqunM9NV02PY7A9g/exec';

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

app.post('/api/forward', async (req, res) => {
    try {
        const response = await axios.post(googleUrl, req.body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error forwarding request:', error);
        res.status(500).json({ error: 'An error occurred while forwarding the request.' });
    }
});

app.listen(3001, () => console.log('Proxy server running on port 3000'));

export default app;