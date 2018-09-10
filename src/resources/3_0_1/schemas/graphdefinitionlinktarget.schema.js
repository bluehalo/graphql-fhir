const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary GraphDefinition.link.target Schema
 */
module.exports = new GraphQLObjectType({
	name: 'GraphDefinitionLinkTarget',
	description: 'Potential target for the link.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Type of resource this link refers to.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Type of resource this link refers to.'
		},
		profile: {
			type: UriScalar,
			description: 'Profile for the target resource.'
		},
		_profile: {
			type: require('./element.schema'),
			description: 'Profile for the target resource.'
		},
		compartment: {
			type: new GraphQLList(require('./graphdefinitionlinktargetcompartment.schema')),
			description: 'Compartment Consistency Rules.'
		}
	})
});
