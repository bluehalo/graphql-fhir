const {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Dosage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Dosage',
	description: 'Base StructureDefinition for Dosage Type',
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
		_sequence: {
			type: require('./element.schema.js'),
			description:
				'Indicates the order in which the dosage instructions should be applied or interpreted.',
		},
		sequence: {
			type: GraphQLInt,
			description:
				'Indicates the order in which the dosage instructions should be applied or interpreted.',
		},
		_text: {
			type: require('./element.schema.js'),
			description: 'Free text dosage instructions e.g. SIG.',
		},
		text: {
			type: GraphQLString,
			description: 'Free text dosage instructions e.g. SIG.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/additional-instruction-codes
		additionalInstruction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: "Supplemental instruction - e.g. 'with meals'.",
		},
		_patientInstruction: {
			type: require('./element.schema.js'),
			description:
				'Instructions in terms that are understood by the patient or consumer.',
		},
		patientInstruction: {
			type: GraphQLString,
			description:
				'Instructions in terms that are understood by the patient or consumer.',
		},
		timing: {
			type: require('./timing.schema.js'),
			description: 'When medication should be administered.',
		},
		_asNeededBoolean: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		asNeededBoolean: {
			type: GraphQLBoolean,
			description:
				'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		asNeededCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		site: {
			type: require('./codeableconcept.schema.js'),
			description: 'Body site to administer to.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/route-codes
		route: {
			type: require('./codeableconcept.schema.js'),
			description: 'How drug should enter body.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/administration-method-codes
		method: {
			type: require('./codeableconcept.schema.js'),
			description: 'Technique for administering medication.',
		},
		doseRange: {
			type: require('./range.schema.js'),
			description: 'Amount of medication per dose.',
		},
		doseQuantity: {
			type: require('./quantity.schema.js'),
			description: 'Amount of medication per dose.',
		},
		maxDosePerPeriod: {
			type: require('./ratio.schema.js'),
			description: 'Upper limit on medication per unit of time.',
		},
		maxDosePerAdministration: {
			type: require('./quantity.schema.js'),
			description: 'Upper limit on medication per administration.',
		},
		maxDosePerLifetime: {
			type: require('./quantity.schema.js'),
			description: 'Upper limit on medication per lifetime of the patient.',
		},
		rateRatio: {
			type: require('./ratio.schema.js'),
			description: 'Amount of medication per unit of time.',
		},
		rateRange: {
			type: require('./range.schema.js'),
			description: 'Amount of medication per unit of time.',
		},
		rateQuantity: {
			type: require('./quantity.schema.js'),
			description: 'Amount of medication per unit of time.',
		},
	}),
});
