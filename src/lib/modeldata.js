import mongoose from 'mongoose';

var Schema 		= mongoose.Schema;

// this function lets you insert data into the mongodb and returns back the inserted data
exports.create = function(Model, modeldata){
	return new Promise((resolve, reject) => {
		//saving the model data 
		modeldata.save((err) => {
			if(err){
				reject(err);
			}
			let doc_id = modeldata._id
			//after saving, fetch the data back from the db using the _id
			Model.findOne({_id:doc_id}).exec()
			.then((doc) => {
				resolve(doc);
			})
			.catch((err) => {
				reject(err);
			})
		});
	});
};