const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Dosage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Dosage',
	description: 'Base StructureDefinition for Dosage Type.',
	fields: () => extendSchema(require('./element.schema'), {
		sequence: {
			type: GraphQLInt,
			description: 'Indicates the order in which the dosage instructions should be applied or interpreted.'
		},
		_sequence: {
			type: require('./element.schema'),
			description: 'Indicates the order in which the dosage instructions should be applied or interpreted.'
		},
		text: {
			type: GraphQLString,
			description: 'Free text dosage instructions e.g. SIG.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'Free text dosage instructions e.g. SIG.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/additional-instruction-codes
		additionalInstruction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Supplemental instruction - e.g. \'with meals\'.'
		},
		patientInstruction: {
			type: GraphQLString,
			description: 'Instructions in terms that are understood by the patient or consumer.'
		},
		_patientInstruction: {
			type: require('./element.schema'),
			description: 'Instructions in terms that are understood by the patient or consumer.'
		},
		timing: {
			type: require('./timing.schema'),
			description: 'When medication should be administered.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		asNeededBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).'
		},
		_asNeededBoolean: {
			type: require('./element.schema'),
			description: 'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		asNeededCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		site: {
			type: require('./codeableconcept.schema'),
			description: 'Body site to administer to.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/route-codes
		route: {
			type: require('./codeableconcept.schema'),
			description: 'How drug should enter body.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/administration-method-codes
		method: {
			type: require('./codeableconcept.schema'),
			description: 'Technique for administering medication.'
		},
		doseRange: {
			type: require('./range.schema'),
			description: 'Amount of medication per dose.'
		},
		doseQuantity: {
			type: require('./quantity.schema'),
			description: 'Amount of medication per dose.'
		},
		maxDosePerPeriod: {
			type: require('./ratio.schema'),
			description: 'Upper limit on medication per unit of time.'
		},
		maxDosePerAdministration: {
			type: require('./quantity.schema'),
			description: 'Upper limit on medication per administration.'
		},
		maxDosePerLifetime: {
			type: require('./quantity.schema'),
			description: 'Upper limit on medication per lifetime of the patient.'
		},
		rateRatio: {
			type: require('./ratio.schema'),
			description: 'Amount of medication per unit of time.'
		},
		rateRange: {
			type: require('./range.schema'),
			description: 'Amount of medication per unit of time.'
		},
		rateQuantity: {
			type: require('./quantity.schema'),
			description: 'Amount of medication per unit of time.'
		}
	})
});
