const mongoose = require('mongoose');

async function connectToMongoDB(url) {
    await mongoose.connect(url);
    console.log("\nMONGODB Connected!");
    
}

module.exports = {
    connectToMongoDB
}