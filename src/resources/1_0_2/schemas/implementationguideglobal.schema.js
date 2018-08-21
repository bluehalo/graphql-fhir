const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImplementationGuideGlobal Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuideGlobal',
	description: 'A set of profiles that all resources covered by this implementation guide must conform to.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of resource that all instances must conform to.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of resource that all instances must conform to.'
		},
		profile: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A reference to the profile that all instances must conform to.'
		}
	})
});
