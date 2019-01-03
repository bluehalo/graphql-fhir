const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ProcessResponse.processNote Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcessResponseProcessNote',
	description:
		'Suite of processing notes or additional requirements if the processing has been held.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
			type: {
				type: require('./codeableconcept.schema'),
				description: 'The note purpose: Print/Display.',
			},
			text: {
				type: GraphQLString,
				description: 'The note text.',
			},
			_text: {
				type: require('./element.schema'),
				description: 'The note text.',
			},
		}),
});
