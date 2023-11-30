const { log } = require('console');
const fs = require('fs');
// reading files
    // fs.readFile('./docs/blog1.txt', (err, data) => {
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log(data.toString());
    // })
    // console.log('last nine');

// writing files
    // fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    //     console.log('file was writter');
    // });

    // fs.writeFile('./docs/blog2.txt', 'hello, again', () => {  // if file doesn't exist it creates a new file
    //     console.log('file was writter');
    // });

// directories
    // () => {} call back function
    // fs.mkdir('./assets', (err) => {
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log('folder created');
    // })
    // if(!fs.existsSync('./assets')) {
    //     fs.mkdir('./assets', (err) => {
    //         if(err) {
    //             console.log(err);
    //         }
    //         console.log('folder created');
    //     })
    // } else {
    //     fs.rmdir('./assets', (err) => {
    //         if(err) {
    //             console.log(err);
    //         }
    //         console.log("folder deleted..!!");
    //     })
    // }


// deleting files 

    if(fs.existsSync('./docs/deleteme.txt')) {
        fs.unlink('./docs/deleteme.txt', (err) => {
            if(err) {
                console.log(err);
            }
            console.log("file deleted");
        })
    }