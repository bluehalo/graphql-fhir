const {
	extendSchema,
	mapJsonToSchema
} = require('./schema.utils');

const {
	GraphQLInputObjectType,
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

// Sample GraphQL Object Type
let PersonSchema = new GraphQLInputObjectType({
	name: 'PersonSchema',
	description: 'Random Information',
	fields: {
		first_name: { type: GraphQLString },
		last_name: { type: GraphQLString }
	}
});

let ContactSchema = new GraphQLInputObjectType({
	name: 'ContactSchema',
	description: 'Random Information',
	fields: {
		city: { type: GraphQLString },
		state: { type: GraphQLString },
		person: { type: PersonSchema }
	}
});

describe('Extends Utils Test', () => {

	describe('extendSchema', () => {

		test('should return an empty object if invoked with no args', () => {
			let schema = extendSchema();
			expect(Object.keys(schema)).toHaveLength(0);
		});

		test('should merge schema related fields from two objects together', () => {
			let SchemaA = { city: { type: GraphQLString, description: 'City' }};
			let SchemaB = { state: { type: GraphQLString, description: 'State' }};
			let schema = extendSchema(SchemaA, SchemaB);

			expect(schema.city).toBeDefined();
			expect(schema.state).toBeDefined();
			expect(schema.city.description).toEqual('City');
			expect(schema.state.description).toEqual('State');
		});

		test('should merge schema related fields from a GraphQLObjectType and a JSON object together', () => {
			// Schema that will extend the Location Schema
			let ApartmentSchema = {
				unit: {
					type: GraphQLString,
					description: 'Apartment unit number',
					badProperty: 'muah ha ha ha'
				}
			};
			// Sample GraphQL Object Type
			let LocationSchema = new GraphQLObjectType({
				name: 'Location',
				description: 'Basic Location Information',
				fields: {
					city: {
						type: GraphQLString,
						description: 'City',
						resolve: function () {
							return 'Crystal Cove';
						}
					},
					state: {
						type: GraphQLString,
						description: 'State'
					}
				}
			});

			let schema = extendSchema(LocationSchema, ApartmentSchema);

			expect(schema.city).toBeDefined();
			expect(schema.unit).toBeDefined();
			expect(schema.state).toBeDefined();

			// Invalid GraphQL Arguments should be dropped, so badProperty should be undefined
			expect(schema.unit.badProperty).toBeUndefined();

			// Check the resolver was left in tact
			expect(schema.city.resolve()).toEqual('Crystal Cove');
		});

	});

	describe('mapJsonToSchema', () => {

		test('should take a schema and some JSON and return properties', () => {
			let json = {
				city: 'Foo',
				state: 'Bar',
				person: { first_name: 'Joe' }
			};

			let result = mapJsonToSchema(json, ContactSchema);

			expect(result.value).toEqual(json);
		});

		test('should return an error when not being able to coerce values', () => {
			let json = {
				city: 'Foo',
				state: 'Bar',
				badProperty: 'fubar'
			};

			let result = mapJsonToSchema(json, ContactSchema);

			expect(result.errors).toHaveLength(1);
			expect(result.value).not.toBeDefined();
		});

	});

});
