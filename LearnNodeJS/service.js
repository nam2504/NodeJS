var mongoose = require('mongoose');

//Thiết lập một kết nối mongoose mặc định
var connectionString = 'mongodb://localhost:27017/test';
mongoose.connect(connectionString, { useNewUrlParser: true });
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// var UserModel = require("/models/user");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        _uId: Schema.Types.ObjectId,
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


var io = require("socket.io");

var UserModel = mongoose.model('User', UserSchema);

function saveUser(data){
    var user = new UserModel(data)
    user.save(function (err) {
        if (err) return handleError(err);
    });
}
saveUser({name : "Le Anh Nam", user: "nam2504", password : "123456"});
saveUser({name : "Le Anh Nam", user: "nam2504", password : "123456"});
saveUser({name : "Le Anh Nam", user: "winner", password : "123456"});


UserModel.find({}, function (err, users) {
   users.forEach(function(user){
       console.log(user.user)
   })
});
