const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ValueSetexpansioncontains Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSetexpansioncontains_Input',
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
		_system: {
			type: require('./element.input.js'),
			description:
				'An absolute URI which is the code system in which the code for this item in the expansion is defined.',
		},
		system: {
			type: UriScalar,
			description:
				'An absolute URI which is the code system in which the code for this item in the expansion is defined.',
		},
		_abstract: {
			type: require('./element.input.js'),
			description:
				'If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.',
		},
		abstract: {
			type: GraphQLBoolean,
			description:
				'If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.',
		},
		_inactive: {
			type: require('./element.input.js'),
			description:
				'If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data. It might not be known or specified whether an concept is inactive (and it may depend on the context of use).',
		},
		inactive: {
			type: GraphQLBoolean,
			description:
				'If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data. It might not be known or specified whether an concept is inactive (and it may depend on the context of use).',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The version of the code system from this code was taken. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.',
		},
		version: {
			type: GraphQLString,
			description:
				'The version of the code system from this code was taken. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.',
		},
		_code: {
			type: require('./element.input.js'),
			description:
				'The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.',
		},
		code: {
			type: CodeScalar,
			description:
				'The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.',
		},
		_display: {
			type: require('./element.input.js'),
			description: 'The recommended display for this item in the expansion.',
		},
		display: {
			type: GraphQLString,
			description: 'The recommended display for this item in the expansion.',
		},
	}),
});
