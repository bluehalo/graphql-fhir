const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary GraphDefinitionLinkTarget Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'GraphDefinitionLinkTarget_Input',
	description: 'Potential target for the link.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Type of resource this link refers to.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Type of resource this link refers to.'
		},
		profile: {
			type: UriScalar,
			description: 'Profile for the target resource.'
		},
		_profile: {
			type: require('./element.input'),
			description: 'Profile for the target resource.'
		},
		compartment: {
			type: new GraphQLList(require('./graphdefinitionlinktargetcompartment.input')),
			description: 'Compartment Consistency Rules.'
		}
	})
});
