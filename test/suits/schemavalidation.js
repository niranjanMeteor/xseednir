import assert from 'assert';
import * as Model from '../../src/lib/model';

describe('Test cases for invalid schema strings', () => {
	describe('Case 1',() => {
		let test_string = ``;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		});
	});
	describe('Case 2',() => {
		let test_string = `jalksgns fdgjflkjgafsn`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 3',() => {
		let test_string = `type User @model`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 4',() => {
		let test_string = `type User @model`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 5',() => {
		let test_string = `type User @model {`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 6',() => {
		let test_string = `type User @model {}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 7',() => {
		let test_string = `type User @model (}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 8',() => {
		let test_string = `type User @model {)`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 9',() => {
		let test_string = `type User @model {:}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 10',() => {
		let test_string = `type User @model {!}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 11',() => {
		let test_string = `type User @model {@}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 12',() => {
		let test_string = `type User @model {[]}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 13',() => {
		let test_string = `type User @model {id}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 14',() => {
		let test_string = `type User @model {: !}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 14',() => {
		let test_string = `type User @model {: @}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 15',() => {
		let test_string = `type User @model {: []}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 16',() => {
		let test_string = `type User @model {: ! []}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 17',() => {
		let test_string = `type User @model {: ! @}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 18',() => {
		let test_string = `type User @model {id: String @}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 19',() => {
		let test_string = `type User @model { id : !String}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 20',() => {
		let test_string = `type User @model { id : !String @unique}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 21',() => {
		let test_string = `type User @model { id : ! @unique}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 22',() => {
		let test_string = `type User @model { id :  @unique String!}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 23',() => {
		let test_string = `type User @model { id :  []! }`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 24',() => {
		let test_string = `type User @model { id :  [Apple]! }`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 25',() => {
		let test_string = `type User @model { id :  [Apple] @}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 26',() => {
		let test_string = `type User @model { id :  [Apple] @unique}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 27',() => {
		let test_string = `type User @model { id : [Apple] @unique}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 28',() => {
		let test_string = `type User @model { id : [Apple] @unique}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 29',() => {
		let test_string = `type User @model { 
			id : String @unique,
			key1 : {}
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 30',() => {
		let test_string = `type User @model { 
			key1 : {},
			id : String @unique
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 31',() => {
		let test_string = `type User @model { 
			key1 : [],
			id : !String @unique
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 32',() => {
		let test_string = `type User @model { 
			id : String @unique,
			key1 : [],
			key2 : !String
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 33',() => {
		let test_string = `type User @model { 
			id : String @unique,
			key1 : [],
			key2 : ![]
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 34',() => {
		let test_string = `type User @model { 
			key1 : [],
			id   : String @unique,
			key2 : {}
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
	describe('Case 35',() => {
		let test_string = `type User @model { 
			key1 : [],
			id   : String @unique,
			key2 : {}
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == false)
		})
	});
});

describe('Test cases for fully valid schema strings', () => {
	describe('case 1', () => {
		let test_string = `type User @model { 
			id   : String
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
	describe('case 2', () => {
		let test_string = `type User @model { 
			id   : String!
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
	describe('case 3', () => {
		let test_string = `type User @model { 
			id   : String! @unique
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
	describe('case 4', () => {
		let test_string = `type User @model { 
			id   : String! @unique,
			age  : Int
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
	describe('case 5', () => {
		let test_string = `type User @model { 
			id   : String! @unique,
			age  : Int!
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
	describe('case 6', () => {
		let test_string = `type User @model { 
			id   : String! @unique,
			dateOfBirth  : Date
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
	describe('case 7', () => {
		let test_string = `type User @model { 
			id   : String! @unique,
			age  : Int! @unique
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
	describe('case 8', () => {
		let test_string = `type User @model { 
			id   : String! @unique,
			age  : Int! @unique,
			dateOfBirth : Date
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
	describe('case 9', () => {
		let test_string = `type User @model { 
			id   : String! @unique,
			age  : Int! @unique,
			address : []
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
	describe('case 10', () => {
		let test_string = `type User @model { 
			id   : String! @unique,
			age  : Int! @unique,
			address : [],
			dateOfBirth : Date
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
	describe('case 11', () => {
		let test_string = `type User @model {
			id: String! @unique,
			email: String! @unique,
			name: String!,
			age: Int,
			addresses: [],
			dateOfBirth: Date
		}`;
		it(test_string,() => {
			assert(Model.isValidSchema(test_string) == true)
		})
	});
});
