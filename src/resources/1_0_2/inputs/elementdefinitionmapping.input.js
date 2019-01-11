const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ElementDefinitionmapping Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionmapping_Input',
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
		_identity: {
			type: require('./element.input.js'),
			description: 'An internal reference to the definition of a mapping.',
		},
		identity: {
			type: new GraphQLNonNull(IdScalar),
			description: 'An internal reference to the definition of a mapping.',
		},
		_language: {
			type: require('./element.input.js'),
			description:
				'Identifies the computable language in which mapping.map is expressed.',
		},
		language: {
			type: CodeScalar,
			description:
				'Identifies the computable language in which mapping.map is expressed.',
		},
		_map: {
			type: require('./element.input.js'),
			description:
				'Expresses what part of the target specification corresponds to this element.',
		},
		map: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Expresses what part of the target specification corresponds to this element.',
		},
	}),
});
