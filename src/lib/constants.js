let constants = {

	SchemaExpression	:	/(type)[\s]*[a-zA-Z_]+[a-zA-Z0-9_]*[\s]*(@model)[\s]*{[a-zA-Z0-9:@,\n\s!\[\]]*}$/,
  // to handle Type1 expression of type =  email: String! @unique
  FieldType1	:	/^[a-zA-Z_][a-zA-Z0-9_]*[\s]*[:][\s]*(String|Int|Date)[!]*[\s]*(@unique)*$/,
  // to handle Type2 expression of type =  addresses: []
  FieldType2	:	/^[a-zA-Z_][a-zA-Z0-9_]*[\s]*[:][\s]*\[[\s]*([a-zA-Z_]+[a-zA-Z0-9_]*[\s]*)*\]$/

};

module.exports = constants;
