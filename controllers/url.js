const { nanoid } = require('nanoid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required!" })

    const shortID = nanoid(9);
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []
    });

    return res.json({ id: shortID, shortUrl: `http://localhost:3000/url/${shortID}` });
};

module.exports = {
    handleGenerateNewShortURL
};