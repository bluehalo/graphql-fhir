const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ConceptMapgroupelement Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConceptMapgroupelement',
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
		_code: {
			type: require('./element.schema.js'),
			description: 'Identity (code or path) or the element/item being mapped.',
		},
		code: {
			type: CodeScalar,
			description: 'Identity (code or path) or the element/item being mapped.',
		},
		_display: {
			type: require('./element.schema.js'),
			description:
				'The display for the code. The display is only provided to help editors when editing the concept map.',
		},
		display: {
			type: GraphQLString,
			description:
				'The display for the code. The display is only provided to help editors when editing the concept map.',
		},
		target: {
			type: new GraphQLList(
				require('./conceptmapgroupelementtarget.schema.js'),
			),
			description:
				'A concept from the target value set that this concept maps to.',
		},
	}),
});
