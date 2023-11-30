const express = require('express');
const morgan  = require('morgan');
// express app
const app = express();

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



app.get('/', (req, res) => { // homepage handler
    // it takes 2 argument first one what path or URL you want to listen  and 2nd argument is function 
    // res.send('<p>Home page</p>');
    // res.sendFile('./views/index.html', { root: __dirname});
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem Ipsum dolor sit amet consecutor'},
        {title: 'Mario finds stars', snippet: 'Lorem Ipsum dolor sit amet consecutor'},
        {title: 'How to defeat bowser', snippet: 'Lorem Ipsum dolor sit amet consecutor'},
    ];
    res.render('index', {title: 'Home', blogs });
}); 

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    // res.sendFile('./views/about.html', { root: __dirname});
    res.render('about', {title: 'About' });
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