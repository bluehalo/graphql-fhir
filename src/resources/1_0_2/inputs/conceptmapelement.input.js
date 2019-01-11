const { GraphQLList, GraphQLInputObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ConceptMapelement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapelement_Input',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_codeSystem: {
			type: require('./element.input.js'),
			description:
				'An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).',
		},
		codeSystem: {
			type: UriScalar,
			description:
				'An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).',
		},
		_code: {
			type: require('./element.input.js'),
			description: 'Identity (code or path) or the element/item being mapped.',
		},
		code: {
			type: CodeScalar,
			description: 'Identity (code or path) or the element/item being mapped.',
		},
		target: {
			type: new GraphQLList(require('./conceptmapelementtarget.input.js')),
			description:
				'A concept from the target value set that this concept maps to.',
		},
	}),
});
