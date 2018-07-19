const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConformanceDocument Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConformanceDocument',
	description: 'A document definition.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/document-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Mode of this document declaration - whether application is producer or consumer.'
		},
		_mode: {
			type: require('./element.schema'),
			description: 'Mode of this document declaration - whether application is producer or consumer.'
		},
		documentation: {
			type: GraphQLString,
			description: 'A description of how the application supports or uses the specified document profile.  For example, when are documents created, what action is taken with consumed documents, etc.'
		},
		_documentation: {
			type: require('./element.schema'),
			description: 'A description of how the application supports or uses the specified document profile.  For example, when are documents created, what action is taken with consumed documents, etc.'
		},
		profile: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A constraint on a resource used in the document.'
		}
	})
});
