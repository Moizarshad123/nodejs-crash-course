const http = require('http');
const fs   = require('fs');
const _ = require('lodash'); // we can also assign is as lo instead of _

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // lodash
    const num = _.random(0, 20);
    console.log(num);

    // lodash methods
    // _.once() method restrict function to run at once only
    // _.random() to generate random numbers
    
    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    // set header content type
    // res.setHeader('Content-Type', 'text/plain');
    // res.setHeader('Content-Type', 'text/html');

    // res.write('hello, world'); 
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<p>Hello, world</p>');
    // res.write('<p>Hello again, ninjas</p>');
    // res.end();

    res.setHeader('Content-Type', 'text/html');
    let path = './views/'; //bcoz all html files are in views folder
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-blah':
            res.statusCode = 301; // 301 means resource has been permanently moved or redirect
            res.setHeader('Location', '/about');
            res.end();
            break;
     
        default:
            path += '404.html';
            res.statusCode = 404 ;
            break;
    }

     // send an html file
     fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data); // if we were writing multiple things we might use res.write one after another
            // res.end();
            res.end(data);  // if we were writing single thing we do like this
        }
    });

    // // send an html file
    // fs.readFile('./views/index.html', (err, data) => {
    //     if(err) {
    //         console.log(err);
    //         res.end();
    //     } else {
    //         // res.write(data); // if we were writing multiple things we might use res.write one after another
    //         // res.end();
    //         res.end(data);  // if we were writing single thing we do like this
    //     }
    // });


});


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});