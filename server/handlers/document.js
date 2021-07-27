const stream = require('stream')
const sequelize = require("../config/db.config")
const initModels = require('../models/init-models')
const model = initModels(sequelize)


//define upload handler

exports.uploadFile = (req,res) => {
   
    model.Documents.create({
		type: req.file.mimetype,
		filename: req.file.originalname,
		data: req.file.buffer
	}).then(() => {
		res.json({msg:'File uploaded successfully! -> filename = ' + req.file.originalname});
	}).catch(err => {
		console.log(err);
		res.json({msg: 'Error', detail: err});
	});
}




