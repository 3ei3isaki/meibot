const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/** Init */
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());


// /** Use Router */
// app.use('/api/users/', require('./routes/users.route'));
// app.use('/api/posts/', require('./routes/posts.route'));
// app.use('/api/categories/', require('./routes/categories.route'));
// app.use('/api/login/', require('./routes/login.route'));
// app.use('/api/roles/', require('./routes/roles.route'));
// app.use('/api/cities/', require('./routes/cities.route'));
// app.use('/api/districts/', require('./routes/districts.route'));
// app.use('/api/areas/', require('./routes/areas.route'));
// app.use('/api/projects/', require('./routes/projects.route'));
// app.use('/api/upload/', require('./routes/upload.route'));


/** Get Home End Point */
app.use(express.static(path.join(__dirname, '/../client/build')));


app.get('/*', (req, res) => {
     res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));
});


/** Get 404 End Point */
// app.get('*', (req, res) => res.sendStatus(404));


/** Start SERVER */
let listener = app.listen(process.env.PORT || process.env.SERVER_PORT || 3000, () => { console.log(`Server is listen in port ${listener.address().port}`); });
