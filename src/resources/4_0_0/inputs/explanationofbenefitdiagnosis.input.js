const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitdiagnosis Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitdiagnosis_Input',
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
		_sequence: {
			type: require('./element.input.js'),
			description: 'A number to uniquely identify diagnosis entries.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A number to uniquely identify diagnosis entries.',
		},
		diagnosisCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'The nature of illness or problem in a coded form or as a reference to an external defined Condition.',
		},
		diagnosisReference: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The nature of illness or problem in a coded form or as a reference to an external defined Condition.',
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'When the condition was observed or the relative ranking.',
		},
		onAdmission: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indication of whether the diagnosis was present on admission to a facility.',
		},
		packageCode: {
			type: require('./codeableconcept.input.js'),
			description:
				'A package billing code or bundle code used to group products and services to a particular health condition (such as heart attack) which is based on a predetermined grouping code system.',
		},
	}),
});
