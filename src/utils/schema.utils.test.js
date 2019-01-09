const { mapJsonToSchema } = require('./schema.utils');

const { GraphQLInputObjectType, GraphQLString } = require('graphql');

// Sample GraphQL Object Type
let PersonSchema = new GraphQLInputObjectType({
	name: 'PersonSchema',
	description: 'Random Information',
	fields: {
		first_name: { type: GraphQLString },
		last_name: { type: GraphQLString },
	},
});

let ContactSchema = new GraphQLInputObjectType({
	name: 'ContactSchema',
	description: 'Random Information',
	fields: {
		city: { type: GraphQLString },
		state: { type: GraphQLString },
		person: { type: PersonSchema },
	},
});

describe('Schema Utils Test', () => {
	describe('mapJsonToSchema', () => {
		test('should take a schema and some JSON and return properties', () => {
			let json = {
				city: 'Foo',
				state: 'Bar',
				person: { first_name: 'Joe' },
			};

			let result = mapJsonToSchema(json, ContactSchema);

			expect(result.value).toEqual(json);
		});

		test('should return an error when not being able to coerce values', () => {
			let json = {
				city: 'Foo',
				state: 'Bar',
				badProperty: 'fubar',
			};

			let result = mapJsonToSchema(json, ContactSchema);

			expect(result.errors).toHaveLength(1);
			expect(result.value).not.toBeDefined();
		});
	});
});
