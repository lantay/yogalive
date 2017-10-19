const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

// ──
// ── ─── mailchimp form stuff ────────────────────────────────────────────────────────
// ──

app.use(express.static('views'));

app.post('/signup', (req, res) => {
    // save user details to your database.
    res.send('Signed Up!');
});
// ──
// ── ─── end mailchimp form stuff ────────────────────────────────────────────────────────
// ──
app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
