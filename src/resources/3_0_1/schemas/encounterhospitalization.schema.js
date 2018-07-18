const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary EncounterHospitalization Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EncounterHospitalization',
	description: 'Details about the admission to a healthcare service.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		preAdmissionIdentifier: {
			type: require('./identifier.schema'),
			description: 'Pre-admission identifier.'
		},
		origin: {
			type: require('./reference.schema'),
			description: 'The location from which the patient came before admission.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-admit-source
		admitSource: {
			type: require('./codeableconcept.schema'),
			description: 'From where patient was admitted (physician referral, transfer).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0092
		reAdmission: {
			type: require('./codeableconcept.schema'),
			description: 'Whether this hospitalization is a readmission and why if known.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-diet
		dietPreference: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Diet preferences reported by the patient.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-special-courtesy
		specialCourtesy: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Special courtesies (VIP, board member).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-special-arrangements
		specialArrangement: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.'
		},
		destination: {
			type: require('./reference.schema'),
			description: 'Location to which the patient is discharged.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-discharge-disposition
		dischargeDisposition: {
			type: require('./codeableconcept.schema'),
			description: 'Category or kind of location after discharge.'
		}
	})
});
