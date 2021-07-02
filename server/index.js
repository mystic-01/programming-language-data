import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import languageRoutes from './routes/language.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/language', languageRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Programming languages API,</h1>");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => app.listen(PORT, () => console.log(`<<<---SERVER STARTED ON PORT ${PORT}--->>>`)))
    .catch((error) => console.log(error));