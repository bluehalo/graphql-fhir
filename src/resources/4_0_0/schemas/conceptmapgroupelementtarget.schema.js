const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ConceptMapgroupelementtarget Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConceptMapgroupelementtarget',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_code: {
			type: require('./element.schema.js'),
			description:
				'Identity (code or path) or the element/item that the map refers to.',
		},
		code: {
			type: CodeScalar,
			description:
				'Identity (code or path) or the element/item that the map refers to.',
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
		_equivalence: {
			type: require('./element.schema.js'),
			description:
				"The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).",
		},
		equivalence: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).",
		},
		_comment: {
			type: require('./element.schema.js'),
			description:
				'A description of status/issues in mapping that conveys additional information not represented in  the structured data.',
		},
		comment: {
			type: GraphQLString,
			description:
				'A description of status/issues in mapping that conveys additional information not represented in  the structured data.',
		},
		dependsOn: {
			type: new GraphQLList(
				require('./conceptmapgroupelementtargetdependson.schema.js'),
			),
			description:
				'A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.',
		},
	}),
});
