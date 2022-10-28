const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator')
// soft delete
var mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.plugin(slug)

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Courses = new Schema({
    _id: {type: Number},
    name: { type: String, default: 'ten mac dinh',maxLength: 255 },
    description: { type: String, default: 'khong co mo ta'},
    img: { type: String, maxLength:266},
    slug:{type: String},
    videoId: { type: String},
    slug: { type: String,slug: 'name' ,unique: true},
    // cach ngan gon hon: xem dong 16
    // creatAt: {type: Date, default: Date.now},
    // updateAt: {type: Date, default: Date.now},
  },{
    _id: false,
    // function của mongoose giúp tự render ra createdAt
    timestamps: true
  });

Courses.plugin(mongooseDelete,{ 
  overrideMethods: 'all', // override lại toàn bộ  method 
  deletedAt: true, // thêm trường deletedAt : thòi gian xoá
 })
Courses.plugin(AutoIncrement);
module.exports =mongoose.model('Courses',Courses);