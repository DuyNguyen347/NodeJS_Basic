const Course = require('../models/Course')
const { multipleMongooseObject } = require('../../util/mongoose')
class MeController {
    storeCourses(req, res, next) {
        // Course.countDeleted()
        //     .then((count) => {
        //         console.log(count)
        //     })
        //     .catch(next);
        // Course.find({}) // điều kiện
        //     .then(course => res.render('me/store-course', {
        //         course: multipleMongooseObject(course),
        //         helpers: {
        //             // overide phuong thuc increase chi cho render nay
        //             increase: i => ++i,
        //         }
        //     }))
        //     .catch(next);

        // xử lý bất đồng bộ cho 2 hàm Course.countDeleted(),Course.find({}) bẳng promise
        Promise.all([Course.countDeleted(), Course.find({})])
            // có thể thay result bẳng [deletedCount,course] : kiến thức destructuring 
            .then((result) => res.render('me/store-course', {
                deletedCount: result[0],// deletedCount (cách dùng destructuring)
                course: multipleMongooseObject(result[1]), // course: multipleMongooseObject(course),
                helpers: {
                    // overide phuong thuc increase chi cho render nay
                    increase: i => ++i,
                }
            }))
    }

    trashCourses(req, res, next) {
        Course.findDeleted({}) // điều kiện
            .then(course => res.render('me/trash-course', {
                course: multipleMongooseObject(course),
                helpers: {
                    // overide phuong thuc increase chi cho render nay
                    increase: i => ++i,
                }
            }))
            .catch(next);
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

module.exports = new MeController();
