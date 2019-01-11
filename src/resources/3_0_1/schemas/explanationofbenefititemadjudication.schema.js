const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ExplanationOfBenefititemadjudication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefititemadjudication',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/adjudication
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adjudication-reason
		reason: {
			type: require('./codeableconcept.schema.js'),
			description: 'Adjudication reason such as limit reached.',
		},
		amount: {
			type: require('./money.schema.js'),
			description: 'Monitory amount associated with the code.',
		},
		_value: {
			type: require('./element.schema.js'),
			description:
				'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.',
		},
		value: {
			type: GraphQLFloat,
			description:
				'A non-monetary value for example a percentage. Mutually exclusive to the amount element above.',
		},
	}),
});
