const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ClaimDiagnosis Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimDiagnosis',
	description: 'List of patient diagnosis for which care is sought.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'Sequence of diagnosis which serves to provide a link.'
		},
		_sequence: {
			type: require('./element.schema'),
			description: 'Sequence of diagnosis which serves to provide a link.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/icd-10
		diagnosisCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The diagnosis.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/icd-10
		diagnosisReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The diagnosis.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ex-diagnosistype
		type: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The type of the Diagnosis, for example: admitting, primary, secondary, discharge.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ex-diagnosisrelatedgroup
		packageCode: {
			type: require('./codeableconcept.schema'),
			description: 'The package billing code, for example DRG, based on the assigned grouping code system.'
		}
	})
});
