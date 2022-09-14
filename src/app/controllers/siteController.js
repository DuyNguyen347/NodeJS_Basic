const Course = require('../models/Course')
const {multipleMongooseObject}  = require('../../util/mongoose')
class SiteController {
    index( req, res, next ) {
         Course.find({})
            .then(course  => {
                //course = course.map(course => course.toObject()),
                res.render('home',{
                    course: multipleMongooseObject(course)
                })
            })
            .catch(error => next(error));
    }

    // [Get] / home
    // index(req, res) {
    //     //res.render('home');
    //     Course.find({},function(err, course) {
    //         if (!err)  res.json(course);
    //         else res.status(404).json({error: 'Co loi'});
    //     })
    // }
}

module.exports = new SiteController();
