const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

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
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_type: {
			type: require('./element.input.js'),
			description: 'Type of resource this link refers to.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Type of resource this link refers to.',
		},
		_params: {
			type: require('./element.input.js'),
			description: 'A set of parameters to look up.',
		},
		params: {
			type: GraphQLString,
			description: 'A set of parameters to look up.',
		},
		_profile: {
			type: require('./element.input.js'),
			description: 'Profile for the target resource.',
		},
		profile: {
			type: CanonicalScalar,
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
