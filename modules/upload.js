 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/eventreg', {useNewUrlParser: true});
var conn =mongoose.Collection;

var uploadSchema =new mongoose.Schema({
	imagename: String,

});

var uploadModel = mongoose.model('uploadimage', uploadSchema);
module.exports=uploadModel;