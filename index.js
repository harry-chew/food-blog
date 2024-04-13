const express = require('express');
const FileHandler = require('./src/FileHandler');
const path = require('path');
const fh = new FileHandler();

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    const blogs = [
        { title : "Blog One", snippet : "Some first bit of text from blog one..." },
        { title : "Blog Two", snippet : "Some other text from blog two..." },
        { title : "Blog Three", snippet : "Now we are taking some text from blog three." }
    ];

    res.render('index', { title : "home", blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title : "about" });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title : "contact" });
});

app.get('/create', (req, res) => {
    res.render('create', { title : "create" });
});

// Import the usersRouter module
const postsRouter = require('./routes/postsRouter');
// Use the posts for '/posts' path
app.use('/posts', postsRouter);

//catch all
app.use((req, res) => {
    res.send('404');
});