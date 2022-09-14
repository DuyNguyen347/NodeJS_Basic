// dùng cho list course
function multipleMongooseObject(mongooses){
    return mongooses.map(function(mongoose){
            return mongoose.toObject();
    })
}

// dùng cho 1 course
function mongoosesToObject(mongoose){
    return mongoose ? mongoose.toObject() : mongoose;
}
//cach 1 
module.exports = {multipleMongooseObject,mongoosesToObject};

//  cach 2
// module.exports = {
//     multipleMongooseObject: function (mongooses){
//         return mongooses.map(mongoose => mongoose.toObject())
//     }
// };
