const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ElementDefinitiontype Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitiontype_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_code: {
			type: require('./element.input.js'),
			description:
				'Name of Data type or Resource that is a(or the) type used for this element.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Name of Data type or Resource that is a(or the) type used for this element.',
		},
		_profile: {
			type: require('./element.input.js'),
			description:
				'Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.',
		},
		profile: {
			type: new GraphQLList(UriScalar),
			description:
				'Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.',
		},
		_aggregation: {
			type: require('./element.input.js'),
			description:
				'If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-aggregation-mode
		aggregation: {
			type: new GraphQLList(CodeScalar),
			description:
				'If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.',
		},
	}),
});
