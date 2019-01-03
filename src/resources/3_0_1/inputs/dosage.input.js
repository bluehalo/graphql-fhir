const { GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Dosage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Dosage_Input',
	description: 'Base StructureDefinition for Dosage Type.',
	fields: () => extendSchema(require('./element.input'), {
		sequence: {
			type: GraphQLInt,
			description: 'Indicates the order in which the dosage instructions should be applied or interpreted.'
		},
		_sequence: {
			type: require('./element.input'),
			description: 'Indicates the order in which the dosage instructions should be applied or interpreted.'
		},
		text: {
			type: GraphQLString,
			description: 'Free text dosage instructions e.g. SIG.'
		},
		_text: {
			type: require('./element.input'),
			description: 'Free text dosage instructions e.g. SIG.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/additional-instruction-codes
		additionalInstruction: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Supplemental instruction - e.g. \'with meals\'.'
		},
		patientInstruction: {
			type: GraphQLString,
			description: 'Instructions in terms that are understood by the patient or consumer.'
		},
		_patientInstruction: {
			type: require('./element.input'),
			description: 'Instructions in terms that are understood by the patient or consumer.'
		},
		timing: {
			type: require('./timing.input'),
			description: 'When medication should be administered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		asNeededBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).'
		},
		_asNeededBoolean: {
			type: require('./element.input'),
			description: 'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		asNeededCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		site: {
			type: require('./codeableconcept.input'),
			description: 'Body site to administer to.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/route-codes
		route: {
			type: require('./codeableconcept.input'),
			description: 'How drug should enter body.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/administration-method-codes
		method: {
			type: require('./codeableconcept.input'),
			description: 'Technique for administering medication.'
		},
		doseRange: {
			type: require('./range.input'),
			description: 'Amount of medication per dose.'
		},
		doseQuantity: {
			type: require('./quantity.input'),
			description: 'Amount of medication per dose.'
		},
		maxDosePerPeriod: {
			type: require('./ratio.input'),
			description: 'Upper limit on medication per unit of time.'
		},
		maxDosePerAdministration: {
			type: require('./quantity.input'),
			description: 'Upper limit on medication per administration.'
		},
		maxDosePerLifetime: {
			type: require('./quantity.input'),
			description: 'Upper limit on medication per lifetime of the patient.'
		},
		rateRatio: {
			type: require('./ratio.input'),
			description: 'Amount of medication per unit of time.'
		},
		rateRange: {
			type: require('./range.input'),
			description: 'Amount of medication per unit of time.'
		},
		rateQuantity: {
			type: require('./quantity.input'),
			description: 'Amount of medication per unit of time.'
		}
	})
});
