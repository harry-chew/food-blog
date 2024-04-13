// postsRouter.js
//database
const { JsonDB, Config } = require('node-json-db');
var db = new JsonDB(new Config("blogposts", true, false, '/data/'));

const express = require('express');
const router = express.Router();

// Define routes for user-related endpoints
router.get('/', (req, res) => {
    res.send('get all posts');
});

router.get('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`get post ${postId}`);
});

router.post('/:id', async (req, res) => {
    const postId = req.params.id;
    await db.push(`/${postId}`);
    res.send('post created');
});

module.exports = router;