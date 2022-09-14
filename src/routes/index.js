const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');

const bodyParser = require('body-parser')

function route(app) {
    //   app.get('/tintuc', (req, res) => {
    //     res.render('news')
    //   })

    app.use('/tintuc', newsRouter);
    app.use('/course', courseRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
