const Course = require('../models/Course')
const { mongoosesToObject } = require('../../util/mongoose');
// định dạng lại code
const { resolveConfig } = require('prettier');
const { render } = require('node-sass');
class CourseController {
    // [Get] / news
    index(req, res) {
        res.render('news');
    }
    show(req, res, next) {
        // res.send('course details');
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('course/show', {
                    course: mongoosesToObject(course),
                });
            })
            .catch(next);
    }
    create(req, res, next) {
        // res.send('course details');
        res.render('course/create')
    }
    store(req, res, next) {
        req.body.img = `https://i.ytimg.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        //res.json(req.body);
        course.save();
        res.redirect('/home');
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('course/edit', {
                    course: mongoosesToObject(course),
                })
            })
            .catch(next);
    }
    // [PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(function () {
                res.redirect('/me/store/courses');
            })
            .catch(next);
    }
    //[del] /course/:id 
    delete(req, res, next) {
        // note : phan biet params va body 
        Course.delete({ _id: req.params.id }) // delete được override lại bằng thư viện soft delete (xoá mềm)
            .then(function () {
                // redirect back sẽ trả về đường dẫn trước đó
                res.redirect('back')
            })
            .catch(next);
    }
    restore(req, res, next) {
        // note : phan biet params va body 
        Course.restore({ _id: req.params.id }) // delete được override lại bằng thư viện soft delete (xoá mềm)
            .then(function () {
                // redirect back sẽ trả về đường dẫn trước đó
                res.redirect('/me/store/courses')
            })
            .catch(next);
    }
    destroy(req, res, next) {
        // note : phan biet params va body 
        Course.deleteOne({ _id: req.params.id }) // deleteOne là method của Mongoose
            .then(function () {
                res.redirect('/me/trash/courses')
            })
            .catch(next);
    }
    handleForm(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid !' });
        }
    }
}

module.exports = new CourseController();
