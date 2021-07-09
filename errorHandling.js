const expres = require('express')
var app = expres()

app.get('/', (req, res) => {
    res.send("welcome to home page")
    console.log("welcome to home page");
})
app.get('/about', (req, res) => {
    req.send("welcome to about page")
    console.log("welcome to about page");
})


// Error handling middileware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.stack);
});



app.listen(3040, () => console.log('server running...'))