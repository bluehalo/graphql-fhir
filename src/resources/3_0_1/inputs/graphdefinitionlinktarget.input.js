const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary GraphDefinitionlinktarget Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'GraphDefinitionlinktarget_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_type: {
			type: require('./element.input.js'),
			description: 'Type of resource this link refers to.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Type of resource this link refers to.',
		},
		_profile: {
			type: require('./element.input.js'),
			description: 'Profile for the target resource.',
		},
		profile: {
			type: UriScalar,
			description: 'Profile for the target resource.',
		},
		compartment: {
			type: new GraphQLList(
				require('./graphdefinitionlinktargetcompartment.input.js'),
			),
			description: 'Compartment Consistency Rules.',
		},
	}),
});
