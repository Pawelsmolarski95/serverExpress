const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/views/${name}`))
    };
    next();
});
app.use(express.static(path.join(__dirname, '/public')));

app.use('/user', (req, res, next) => {
    res.send('You need log in');
})
app.get('/',(req, res) => {
    res.show('index.html');
});
app.get('/home',(req, res) => {
    res.show('index.html');
});
app.get('/about',(req, res) => {
    res.show('about.html')
});

app.use((req, res) => {
    res.status(404).show('notFound.html');
});



app.listen(8800, () => {
    console.log('server is running')
});