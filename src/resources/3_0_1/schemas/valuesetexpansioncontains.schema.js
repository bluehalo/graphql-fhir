const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ValueSetexpansioncontains Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetexpansioncontains',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_system: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI which is the code system in which the code for this item in the expansion is defined.',
		},
		system: {
			type: UriScalar,
			description:
				'An absolute URI which is the code system in which the code for this item in the expansion is defined.',
		},
		_abstract: {
			type: require('./element.schema.js'),
			description:
				'If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.',
		},
		abstract: {
			type: GraphQLBoolean,
			description:
				'If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.',
		},
		_inactive: {
			type: require('./element.schema.js'),
			description:
				'If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data.',
		},
		inactive: {
			type: GraphQLBoolean,
			description:
				'If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The version of this code system that defined this code and/or display. This should only be used with code systems that do not enforce concept permanence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The version of this code system that defined this code and/or display. This should only be used with code systems that do not enforce concept permanence.',
		},
		_code: {
			type: require('./element.schema.js'),
			description:
				'The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.',
		},
		code: {
			type: CodeScalar,
			description:
				'The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.',
		},
		_display: {
			type: require('./element.schema.js'),
			description: 'The recommended display for this item in the expansion.',
		},
		display: {
			type: GraphQLString,
			description: 'The recommended display for this item in the expansion.',
		},
	}),
});
