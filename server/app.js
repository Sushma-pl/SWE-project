const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

// Connect Database
connectDB();

app.use(express.json())
app.use(cors());

// Available routes 
app.use('/member/alumni',require('./routes/member/alumni'))


//previous work
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));