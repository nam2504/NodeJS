var mongoose = require('mongoose');

//Thiết lập một kết nối mongoose mặc định
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var UserInfoSchema = new Schema({
    name : String,
    location : String,
    gender : String,
    email : String,
    phone : number,
    
});

var UserSchema = new Schema({
    _uId: Schema.Types.ObjectId,
    user: String,
    password: String,
    living: Boolean,
    create: { type: Date, default: Date.now },
    age: { type: Number, min: 18, max: 65, required: true },
    mixed: Schema.Types.Mixed,
    array: [],
    ofString: [String], // Bạn có thể tạo mảng cho các trường khác
    nested: { stuff: { type: String, lowercase: true, trim: true } }
});