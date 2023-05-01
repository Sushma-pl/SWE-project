const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

// Connect Database
connectDB();

app.use(express.json())
app.use(cors());

// Available routes 
app.use('/member/alumni',require('./routes/member/alumni'));
app.use('/member/student',require('./routes/member/student'));
app.use('/member/mentor',require('./routes/member/mentor'));
app.use('/member/visitor',require('./routes/member/visitor'));
app.use('/research/conference',require('./routes/research/conference'));
app.use('/research/seminar',require('./routes/research/seminar'));
app.use('/research/award',require('./routes/research/award'));
app.use('/research/publication',require('./routes/research/publication'));

//previous work
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));