const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ConceptMapgroupelement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapgroupelement_Input',
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
		_code: {
			type: require('./element.input.js'),
			description: 'Identity (code or path) or the element/item being mapped.',
		},
		code: {
			type: CodeScalar,
			description: 'Identity (code or path) or the element/item being mapped.',
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
		target: {
			type: new GraphQLList(require('./conceptmapgroupelementtarget.input.js')),
			description:
				'A concept from the target value set that this concept maps to.',
		},
	}),
});
