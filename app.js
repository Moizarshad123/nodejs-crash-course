const express = require('express');
const morgan  = require('morgan');
const mongoose = require('mongoose');
const Blog     = require('./models/blog');
// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://Moiz_9265:9265_Moiz@nodetuts.fnrqvos.mongodb.net/nodeTuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err));
// register view engine
app.set('view engine', 'ejs');
// app.set('view','myviews');


// listen for requests
app.listen(3000);

// middleware & static files. to link a file 
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

// app.use(morgan('dev'));
// app.use(morgan('tiny'));

// app.get('/add-blog', (req, res) => {
//     const myBlog = new Blog({
//         title: 'blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     })
//     myBlog.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('656a896d615e7e464a3dfa23')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

app.get('/', (req, res) => { // homepage handler
    // it takes 2 argument first one what path or URL you want to listen  and 2nd argument is function 
    // res.send('<p>Home page</p>');
    // res.sendFile('./views/index.html', { root: __dirname});

    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem Ipsum dolor sit amet consecutor'},
    //     {title: 'Mario finds stars', snippet: 'Lorem Ipsum dolor sit amet consecutor'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem Ipsum dolor sit amet consecutor'},
    // ];
    // res.render('index', {title: 'Home', blogs });
    res.redirect('/blogs');

}); 

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    // res.sendFile('./views/about.html', { root: __dirname});
    res.render('about', {title: 'About' });
}); 

// blog routes

app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1}) // -1 means descending order
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result});
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create Blog' });
}); 


// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// 404 page
app.use((req, res) => {
    // res.sendFile('./views/404.html', { root: __dirname});
    // res.status(404).sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404', {title: '404'});

});