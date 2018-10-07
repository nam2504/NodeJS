var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        user: {type: String, index: {unique: true, dropDups: true}},
        password: String,
        name : String,
        location : String,
        gender : String,
        email : String,
        phone : String,
        create: { type: Number, default: (new Date().getTime()) },
        disable: { type: Boolean, default: false }
    }
);

// // Tạo phương thức ảo cho tên đầy đủ
// UserProfileSchema
//     .virtual('name')
//     .get(function () {
//         return this.family_name + ', ' + this.first_name;
//     });

// Phương thức ảo cho URL của tác giả
UserSchema
    .virtual('url')
    .get(function () {
        return '/user/' + this._id;
    });

//xuất mô hình
module.exports = mongoose.model('User', UserSchema);