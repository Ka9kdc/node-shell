const fs = require('fs');
// const done = require('./bash');

module.exports =  (done) => {
    fs.readdir('./', 'utf8', (err, files) =>{
        if(err){
            done('Something went wrong!')
        } else {
            done(files.join('\n'))
        }
    })
}

