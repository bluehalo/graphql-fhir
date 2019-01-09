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
 * @summary ConceptMapgroupunmapped Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapgroupunmapped_Input',
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
		_mode: {
			type: require('./element.input.js'),
			description:
				'Defines which action to take if there is no match in the group. One of 3 actions is possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conceptmap-unmapped-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Defines which action to take if there is no match in the group. One of 3 actions is possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).',
		},
		_code: {
			type: require('./element.input.js'),
			description:
				"The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.",
		},
		code: {
			type: CodeScalar,
			description:
				"The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.",
		},
		_display: {
			type: require('./element.input.js'),
			description:
				'The display for the code. The display is only provided to help editors when editing the concept map.',
		},
		display: {
			type: GraphQLString,
			description:
				'The display for the code. The display is only provided to help editors when editing the concept map.',
		},
		_url: {
			type: require('./element.input.js'),
			description:
				'The canonical URL of the map to use if this map contains no mapping.',
		},
		url: {
			type: UriScalar,
			description:
				'The canonical URL of the map to use if this map contains no mapping.',
		},
	}),
});
