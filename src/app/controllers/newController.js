class NewsController {
    // [Get] / news
    index(req, res) {
        res.render('news');
    }
    showMessage(req, res) {
        res.send('message');
    }
}

module.exports = new NewsController();
