const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const messageRouter = require('./routes/message');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true 
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB connection Successfuly');
})


app.use('/exercises', messageRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
	console.log(`server run on ${port}`);	
})