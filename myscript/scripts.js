let http = require ('http')
let ourApp = http.createServer(function (req, res){
    if (req.url=='/') {
        res.end('Hello, and thank you for your interest')
    }
    if(req.url == '/aboutUs') {
        res.end ('thank your for getting in touch')
    }
    res.end ('We cant find what you are looking for')
})
ourApp.listen(5500)