const request = require('request')
function curl (fileName, done) {
    request (fileName, (err, response, body) =>{
        if(err) done('Something went wrong!')
        else {
            done(body)
        }
    })
}
module.exports = curl;