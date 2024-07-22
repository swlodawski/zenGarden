const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
//const exhbs = require('express-handlebars');

// initialize models for sequelize
//const model = require('./models/index');


const app = express();
const PORT = process.env.PORT || 3001;

//const hbs = exhbs.create({});

//app.engine('handlebars', hbs.engine);
//app.set('view-engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('server started')
    })
});