const multer = require("multer");
//define multer config
const upload = multer({dest: 'files'})

module.exports = upload;