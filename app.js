const express = require('express');
const app = express();

app.get('/', function (require, response) {
    res.sendStatus('Hello World!')
});

// Respond with Hello World! on the homepage:
app.post('/', function (require, response) {
    response.send('Got a POST request')
});

// Respond to POST request on the root route (/), the application’s home page:
app.put('/user', function (require, response) {
    response.send('Got a PUT request at /user')
})

// Respond to a PUT request to the /user route:
app.delete('/user', function (require, response) {
    response.send('Got a DELETE request at /user')
})

//Respond to a DELETE request to the /user route:
app.listen(3000, () => console.log('Example app listening on port 3000'))