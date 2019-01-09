const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

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
				'The version of the code system that the codes are selected from.',
		},
		version: {
			type: GraphQLString,
			description:
				'The version of the code system that the codes are selected from.',
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
				'Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.',
		},
		_valueSet: {
			type: require('./element.input.js'),
			description:
				'Selects concepts found in this value set. This is an absolute URI that is a reference to ValueSet.url.',
		},
		valueSet: {
			type: new GraphQLList(UriScalar),
			description:
				'Selects concepts found in this value set. This is an absolute URI that is a reference to ValueSet.url.',
		},
	}),
});
