const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Conformance.document Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConformanceDocument_Input',
	description: 'A document definition.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/document-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Mode of this document declaration - whether application is producer or consumer.'
		},
		_mode: {
			type: require('./element.input'),
			description: 'Mode of this document declaration - whether application is producer or consumer.'
		},
		documentation: {
			type: GraphQLString,
			description: 'A description of how the application supports or uses the specified document profile.  For example, when are documents created, what action is taken with consumed documents, etc.'
		},
		_documentation: {
			type: require('./element.input'),
			description: 'A description of how the application supports or uses the specified document profile.  For example, when are documents created, what action is taken with consumed documents, etc.'
		},
		profile: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A constraint on a resource used in the document.'
		}
	})
});
