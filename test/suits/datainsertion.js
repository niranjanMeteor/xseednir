import mongoose from 'mongoose';
import chai from 'chai';

import * as Model from '../../src/lib/model';
import * as ModelData from '../../src/lib/modeldata';
import configs from '../config/configs';

const should = chai.should();

describe('Data Type 1',() => {
	before((done) => {
		mongoose.disconnect();
		mongoose.connect(mongoConnectString(), (err) => {
			done(err);
		})
	});
	let schema_string = `type User1 @model {
		name: String!,
		email: String! @unique,
		age : Int,
		addresses: [],
		dateOfBirth: Date
	}`;
	it(schema_string, (done) => {
		let modelschema  = Model.generate(schema_string);
		// console.log(modelschema);
		let MongooseModel = mongoose.model(modelschema.model, new mongoose.Schema(modelschema.schemaObj));
		let modeldata = new MongooseModel({
			name : "Niranjan",
			email: "cobcob75@gmail.com",
			age  : 27,
			addresses : [{city:"New Delhi",state:"Delhi",country:"India"}],
			dateOfBirth : Date()
		});
		// console.log(modeldata);
		ModelData.create(MongooseModel, modeldata)
		.then((data) => {
			data.should.be.json;
			data.should.have.property('_id');
			data.should.have.property('name');
			data.name.should.equal("Niranjan");
			data.should.have.property('email');
			data.email.should.equal("cobcob75@gmail.com");
			data.should.have.property('age');
			data.age.should.equal(27);
			data.should.have.property('addresses');
			data.should.have.property('dateOfBirth');
			done();
		})
		.catch((err) => {
			console.log(err);
			done(err);
		})
	});
	after((done) => {
		mongoose.connection.db.dropDatabase((err) => {
			mongoose.disconnect();
			done();
		});
	});
});

describe('Data Type 2',() => {
	before((done) => {
		mongoose.disconnect();
		mongoose.connect(mongoConnectString(), (err) => {
			done(err);
		})
	});
	let schema_string = `type User2 @model {
		name: String!,
		email: String! @unique,
		age  : Int
	}`;
	it(schema_string, (done) => {
		let modelschema  = Model.generate(schema_string);
		// console.log(modelschema);
		let MongooseModel = mongoose.model(modelschema.model, new mongoose.Schema(modelschema.schemaObj));
		let modeldata = new MongooseModel({
			name : "Niranjan",
			email: "cobcob79@gmail.com",
			age  : 27
		});
		// console.log(modeldata);
		ModelData.create(MongooseModel, modeldata)
		.then((data) => {
			data.should.be.json;
			data.should.have.property('_id');
			data.should.have.property('name');
			data.name.should.equal("Niranjan");
			data.should.have.property('email');
			data.email.should.equal("cobcob79@gmail.com");
			data.should.have.property('age');
			data.age.should.equal(27);
			done();
		})
		.catch((err) => {
			console.log(err);
			done(err);
		})
	});
	after((done) => {
		mongoose.connection.db.dropDatabase((err) => {
			mongoose.disconnect();
			done();
		});
	});
});

describe('Data Type 3',() => {
	before((done) => {
		mongoose.disconnect();
		mongoose.connect(mongoConnectString(), (err) => {
			done(err);
		})
	});
	let schema_string = `type User3 @model {
		addresses: [],
		dateOfBirth: Date
	}`;
	it(schema_string, (done) => {
		let modelschema  = Model.generate(schema_string);
		// console.log(modelschema);
		let MongooseModel = mongoose.model(modelschema.model, new mongoose.Schema(modelschema.schemaObj));
		let modeldata = new MongooseModel({
			addresses : [{city:"New Delhi",state:"Delhi",country:"India"}],
			dateOfBirth : Date()
		});
		// console.log(modeldata);
		ModelData.create(MongooseModel, modeldata)
		.then((data) => {
			data.should.be.json;
			data.should.have.property('_id');
			data.should.have.property('addresses');
			data.should.have.property('dateOfBirth');
			done();
		})
		.catch((err) => {
			console.log(err);
			done(err);
		})
	});
	after((done) => {
		mongoose.connection.db.dropDatabase((err) => {
			mongoose.disconnect();
			done();
		});
	});
});

function mongoConnectString(){
  return "mongodb://"+configs.MONGO_HOST+":"+configs.MONGO_PORT+"/"+configs.DB_NAME;
}