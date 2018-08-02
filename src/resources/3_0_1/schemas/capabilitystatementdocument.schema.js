const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CapabilityStatementDocument Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementDocument',
	description: 'A document definition.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/document-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Mode of this document declaration - whether an application is a producer or consumer.'
		},
		_mode: {
			type: require('./element.schema'),
			description: 'Mode of this document declaration - whether an application is a producer or consumer.'
		},
		documentation: {
			type: GraphQLString,
			description: 'A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.'
		},
		_documentation: {
			type: require('./element.schema'),
			description: 'A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.'
		},
		profile: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A constraint on a resource used in the document.'
		}
	})
});
