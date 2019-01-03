const PositiveIntScalar = require('../scalars/positiveint.scalar');
const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ExplanationOfBenefit.diagnosis Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitDiagnosis_Input',
	description: 'Ordered list of patient diagnosis for which care is sought.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			sequence: {
				type: new GraphQLNonNull(PositiveIntScalar),
				description: 'Sequence of diagnosis which serves to provide a link.',
			},
			_sequence: {
				type: require('./element.input'),
				description: 'Sequence of diagnosis which serves to provide a link.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/icd-10
			diagnosisCodeableConcept: {
				type: new GraphQLNonNull(require('./codeableconcept.input')),
				description: 'The diagnosis.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/icd-10
			diagnosisReference: {
				type: new GraphQLNonNull(require('./reference.input')),
				description: 'The diagnosis.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/ex-diagnosistype
			type: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'The type of the Diagnosis, for example: admitting, primary, secondary, discharge.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/ex-diagnosisrelatedgroup
			packageCode: {
				type: require('./codeableconcept.input'),
				description:
					'The package billing code, for example DRG, based on the assigned grouping code system.',
			},
		}),
});
