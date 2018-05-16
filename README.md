# Xseed BY Niranjan

This repo serves as an starter package written in JavaScript (ES6) for anyone looking to automatically generate mongoose models from some kind of type strings like below.

const Address = `
	type Address {
		city: String,
		state: String
	}`;
const User = `
	type User @model {
		id: String! @unique
		email: String! @unique
		name: String!
		age: Int
		addresses: [Address]
		dateOfBirth: Date
	}`;

The Repo has function exported to to read type strings and dynamically create mongoose models.

* Best practices in file and application organization
* Ready to go build system for working with ES6
* Uses Eslint for code linting
* Example unit tests created with Mocha


#Getting Started
-------------------------------------------------

#Requirements

* Node.js >=8.11
* MongoDB

# Clone project & install dependencies

* $ git clone git@github.com:niranjanMeteor/xseednir.git
* $ cd xseednir
* $ npm install


# Start MongoDb proccess

sudo service mongod start


# Output Library 

* xseednir/src/lib/model.js is the js file which exports the schema validator and generator functions
* xseednir/src/lib/modeldata.js is the js file which exports function to insert data in mongodb


#Testing

* unit testing, with actually inserting data in mongodb and validating the model created
* npm run schematest   // test the validation of different schema types
* npm run datatest     // test the data insertion in the mongodb and validate the data 


#Eslint

is pre-configured for this starter package. It uses the airbnb configuration package and a minimal set of own rules. Configuration is available in .eslintrc.js.


#Unit-Tests

A set of unit tests is available in test/suits folder. Mocha/Chai was used to create and run the unit tests.


Made by Niranjan Kumar (niranjan.cs08@gmail.com)