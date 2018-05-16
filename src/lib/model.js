import CONSTANTS from './constants';

exports.isValidSchema = function(input){
	// check the validity of the input expression
	if(ifInvalidInput(input)){
		return false;
	}

	// split the expression with '@model' and fetch the schema 
	// obj string form the full type string
	let result = input.split('@model');
	let schema = result[1].trim().split('{')[1].trim().split('}')[0].trim();

	// if schema is empty, return false
	if(!schema){
		console.log('Schema is found to be empty');
		return false;
	}

	// Split the inner expreessions chain by ',' to find field expressions
	let schemaFields = schema.split(',');
	let totalNumFields = schemaFields.length;

	for(let i=0; i<totalNumFields; i++){

		let row = schemaFields[i].trim();

		// checking whether the field expression is of type 1
		if(CONSTANTS.FieldType1.test(row)){
			// console.log('passed in type 1');
			continue;
		}
		// checking whether the field expression if of type 2 
		if(CONSTANTS.FieldType2.test(row)){
			// console.log('passed in type 2');
			continue;
		} 
		// oops, the expression did not match any field type 1, returning false
		// console.log('A field expression did not match any type of field');
		//console.log(row)
		return false;
	}
	// the expression is parsed successfully, returning the generated mongoose model
	// console.log('final schema object');
	return true;
};

exports.generate = function(input){

	// check the validity of the input expression
	if(ifInvalidInput(input)){
		return false;
	}

	// split the expression with '@model' and fetch the schema 
	// obj string form the full type string
	let result = input.split('@model');
	let schema = result[1].trim().split('{')[1].trim().split('}')[0].trim();

	// if schema is empty, return false
	if(!schema){
		console.log('Schema is found to be empty');
		return false;
	}

	// Split the inner expreessions chain by ',' to find field expressions
	let schemaFields = schema.split(',');
	let totalNumFields = schemaFields.length;

	// final matching mongoose model schema object to be returned
	var schemaObj = {}; 

	for(let i=0; i<totalNumFields; i++){

		let row = schemaFields[i].trim();

		// checking whether the field expression is of type 1
		if(CONSTANTS.FieldType1.test(row)){
			row = parseInnerExpression(row);
			schemaObj[row.key] = row.value;
			continue;
		}
		// checking whether the field expression if of type 2 
		if(CONSTANTS.FieldType2.test(row)){
			schemaObj[row.split(':')[0].trim()] = {type : 'Array'};	
			continue;
		} 
		// oops, the expression did not match any field type 1, returning false
		// console.log('A field expression did not match any type of field');
		//console.log(row)
		return false;
	}
	// the expression is parsed successfully, returning the generated mongoose model
	// console.log('final schema object');
	// console.log(schemaObj);
	return {model:findModelName(result[0]), schemaObj:schemaObj};
};

function ifInvalidInput(input){
	return CONSTANTS.SchemaExpression.test(input) == false;
}

function parseInnerExpression(input){

	input     = input.split(':');
	let key   = input[0].trim();     // field name as key
	let value = input[1].trim();     // field value expression, to be parsed
	let count = 0;

	let row_schema_obj = {};         // field expression obj to be returned

	// field value expression contains '@'
	if(value.indexOf('@') >= 0){
		row_schema_obj['unique'] = true;
		count++;
	}

	// field value expression contains '!'
	if(value.indexOf('!') >= 0){
		row_schema_obj['required'] = true;
		count = count + 2;
	}
	row_schema_obj['type'] = findType(count, value);
	return {key:key, value:row_schema_obj};

}

function findType(count, value){
	let type = ''
	switch(count){

		// field value expression contains neither '@' nor '!'
		case 0:
			type = value;
			break;

		// field value expression contains only '@'
		case 1:
			type = value.split('@')[0].trim();
			break;

		// field value expression contains only '!'
		case 2:
			type = value.split('!')[0].trim();
			break;

		// field value expression contains both '@' and '!'
		case 3:
			type = value.split('!')[0].trim();
			break;

	}
	if(type == 'Int'){
		type = 'Number'
	}
	return type;
}

function findModelName(input){
	return input.split('type')[1].trim();
}