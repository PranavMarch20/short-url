const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url.js');

const app = express();
const port = 3000;
const DBurl = "mongodb://localhost:27017/short-url"

app.use(express.json());  // to parse req body

app.use('/url', urlRoute);

connectToMongoDB(DBurl).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port} \n`);
    });
});