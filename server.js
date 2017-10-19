const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
var bodyParser = require('body-parser');
var request = require('superagent');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

// ──
// ── ─── mailchimp form stuff ────────────────────────────────────────────────────────
// ──

app.use(express.static('views'));


// app.post('/signup', (req, res) => {
//     // save user details to your database.
// })

// app.get('/list', (req, res) => {
//     request

//         .set('Authorization', 'Basic ' + 'any:' + 'fb61830ae8e279f2610e3803b8c4ac3d-us17')
//         .set('Content-Type', 'application/json')
//         .get('https://us17.api.mailchimp.com/3.0/lists')
//         .end((err, res2) => {
//             console.log(err);
//         });
// });

// signup method
var mailchimpInstance = 'us17';
var listUniqueId = '305212f2c2';
var mailchimpApiKey = 'fb61830ae8e279f2610e3803b8c4ac3d-us17';

app.post('/signup', (req, res) => {
    request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey).toString('base64'))
        .send({
            'email_address': req.body.email,
            'status': 'subscribed',
            'merge_fields': {
                'FNAME': req.body.firstName,
                // 'LNAME': req.body.lastName
            }
        })
        .end((err, response) => {
            if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.sendFile(__dirname + '/public/lazysuccessform.html'); // For React/Redux
            } else {
                res.sendFile(__dirname + '/public/lazysuccessform.html'); // For React/Redux
            }
            // send a 200 response and then render animation on the react side of things
        });
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