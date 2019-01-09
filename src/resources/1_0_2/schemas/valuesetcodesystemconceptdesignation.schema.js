const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ValueSetcodeSystemconceptdesignation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetcodeSystemconceptdesignation',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		_language: {
			type: require('./element.schema.js'),
			description: 'The language this designation is defined for.',
		},
		language: {
			type: CodeScalar,
			description: 'The language this designation is defined for.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/designation-use
		use: {
			type: require('./coding.schema.js'),
			description: 'A code that details how this designation would be used.',
		},
		_value: {
			type: require('./element.schema.js'),
			description: 'The text value for this designation.',
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The text value for this designation.',
		},
	}),
});
