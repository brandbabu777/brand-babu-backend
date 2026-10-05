const express = require('express');  
const mongoose = require('mongoose');  
const cors = require('cors');  
require('dotenv').config();

const app = express();  
app.use(cors());  
app.use(express.json());

const PORT = process.env.PORT || 3000;  
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)  
.then(() => console.log('✅ MongoDB Connected!'))  
.catch(err => console.error('❌ MongoDB Connection Error:', err));

app.get('/api/health', (req, res) => {  
res.json({ status: 'ok', message: 'Brand-Babu API is running!' });  
});

app.listen(PORT, () => {  
console.log(`🚀 Server running on port ${PORT}`);  
});  
