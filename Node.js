/enroll
npm init -y
npm install express body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Store the enrollment details
let enrollments = [];

// Route to handle form submission
app.post('/enroll', (req, res) => {
    const { name, email } = req.body;
    enrollments.push({ name, email });
    console.log(`Enrolled: ${name} (${email})`);
    res.send('Enrollment successful!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
