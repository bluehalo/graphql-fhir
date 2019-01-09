const {
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary MedicationOrderdosageInstruction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationOrderdosageInstruction',
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
		_text: {
			type: require('./element.schema.js'),
			description:
				'Free text dosage instructions can be used for cases where the instructions are too complex to code.  The content of this attribute does not include the name or description of the medication. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication. It is expected that the text instructions will always be populated.  If the dosage.timing attribute is also populated, then the dosage.text should reflect the same information as the timing.',
		},
		text: {
			type: GraphQLString,
			description:
				'Free text dosage instructions can be used for cases where the instructions are too complex to code.  The content of this attribute does not include the name or description of the medication. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication. It is expected that the text instructions will always be populated.  If the dosage.timing attribute is also populated, then the dosage.text should reflect the same information as the timing.',
		},
		additionalInstructions: {
			type: require('./codeableconcept.schema.js'),
			description:
				"Additional instructions such as 'Swallow with plenty of water' which may or may not be coded.",
		},
		timing: {
			type: require('./timing.schema.js'),
			description:
				"The timing schedule for giving the medication to the patient. The Schedule data type allows many different expressions. For example: 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		_asNeededBoolean: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).',
		},
		asNeededBoolean: {
			type: GraphQLBoolean,
			description:
				'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).',
		},
		asNeededCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		siteCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A coded specification of the anatomic site where the medication first enters the body.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		siteReference: {
			type: new GraphQLUnionType({
				name:
					'MedicationOrderdosageInstructionsiteReference_siteReference_Union',
				description:
					'A coded specification of the anatomic site where the medication first enters the body.',
				types: () => [require('./bodysite.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'BodySite') {
						return require('./bodysite.schema.js');
					}
				},
			}),
			description:
				'A coded specification of the anatomic site where the medication first enters the body.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/route-codes
		route: {
			type: require('./codeableconcept.schema.js'),
			description:
				"A code specifying the route or physiological path of administration of a therapeutic agent into or onto a patient's body.",
		},
		method: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A coded value indicating the method by which the medication is introduced into or onto the body. Most commonly used for injections.  For examples, Slow Push; Deep IV.',
		},
		doseRange: {
			type: require('./range.schema.js'),
			description:
				'The amount of therapeutic or other substance given at one administration event.',
		},
		doseQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'The amount of therapeutic or other substance given at one administration event.',
		},
		rateRatio: {
			type: require('./ratio.schema.js'),
			description:
				"Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.",
		},
		rateRange: {
			type: require('./range.schema.js'),
			description:
				"Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.",
		},
		maxDosePerPeriod: {
			type: require('./ratio.schema.js'),
			description:
				'The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time.  For example, 1000mg in 24 hours.',
		},
	}),
});
