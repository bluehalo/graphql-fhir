const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ElementDefinitionType Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionType_Input',
	description: 'The data type or resource that the value of this element is permitted to be.',
	fields: () => extendSchema(require('./element.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Name of Data type or Resource that is a(or the) type used for this element.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Name of Data type or Resource that is a(or the) type used for this element.'
		},
		profile: {
			type: new GraphQLList(UriScalar),
			description: 'Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.'
		},
		_profile: {
			type: require('./element.input'),
			description: 'Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/resource-aggregation-mode
		aggregation: {
			type: new GraphQLList(CodeScalar),
			description: 'If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.'
		},
		_aggregation: {
			type: require('./element.input'),
			description: 'If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.'
		}
	})
});
