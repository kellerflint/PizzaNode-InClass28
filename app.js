import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/thankyou', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/thankyou.html`);
});

app.post('/test', (req, res) => {
    console.log(req);
    res.redirect('/thankyou');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
