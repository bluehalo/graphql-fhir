const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ConceptMapelementtarget Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapelementtarget_Input',
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
				'An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).',
		},
		codeSystem: {
			type: UriScalar,
			description:
				'An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).',
		},
		_code: {
			type: require('./element.input.js'),
			description:
				'Identity (code or path) or the element/item that the map refers to.',
		},
		code: {
			type: CodeScalar,
			description:
				'Identity (code or path) or the element/item that the map refers to.',
		},
		_equivalence: {
			type: require('./element.input.js'),
			description:
				"The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/concept-map-equivalence
		equivalence: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).",
		},
		_comments: {
			type: require('./element.input.js'),
			description:
				'A description of status/issues in mapping that conveys additional information not represented in  the structured data.',
		},
		comments: {
			type: GraphQLString,
			description:
				'A description of status/issues in mapping that conveys additional information not represented in  the structured data.',
		},
		dependsOn: {
			type: new GraphQLList(
				require('./conceptmapelementtargetdependson.input.js'),
			),
			description:
				'A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.',
		},
	}),
});
