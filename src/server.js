const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omni:omni5094@omnistack-y62p6.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true
});


app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log(`Server started on http://localhost:3333`);
});

module.exports = app;