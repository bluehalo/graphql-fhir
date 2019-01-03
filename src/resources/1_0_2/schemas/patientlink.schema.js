const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Patient.link Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PatientLink',
	description: 'Link to another patient resource that concerns the same actual patient.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		other: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The other patient resource that the link refers to.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/link-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of link between this patient resource and another patient resource.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of link between this patient resource and another patient resource.'
		}
	})
});
