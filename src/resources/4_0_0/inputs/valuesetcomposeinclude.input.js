const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary ValueSetcomposeinclude Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSetcomposeinclude_Input',
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
				'An absolute URI which is the code system from which the selected codes come from.',
		},
		system: {
			type: UriScalar,
			description:
				'An absolute URI which is the code system from which the selected codes come from.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				"The version of the code system that the codes are selected from, or the special version '*' for all versions.",
		},
		version: {
			type: GraphQLString,
			description:
				"The version of the code system that the codes are selected from, or the special version '*' for all versions.",
		},
		concept: {
			type: new GraphQLList(
				require('./valuesetcomposeincludeconcept.input.js'),
			),
			description: 'Specifies a concept to be included or excluded.',
		},
		filter: {
			type: new GraphQLList(require('./valuesetcomposeincludefilter.input.js')),
			description:
				'Select concepts by specify a matching criterion based on the properties (including relationships) defined by the system, or on filters defined by the system. If multiple filters are specified, they SHALL all be true.',
		},
		_valueSet: {
			type: require('./element.input.js'),
			description:
				'Selects the concepts found in this value set (based on its value set definition). This is an absolute URI that is a reference to ValueSet.url.  If multiple value sets are specified this includes the union of the contents of all of the referenced value sets.',
		},
		valueSet: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'Selects the concepts found in this value set (based on its value set definition). This is an absolute URI that is a reference to ValueSet.url.  If multiple value sets are specified this includes the union of the contents of all of the referenced value sets.',
		},
	}),
});
