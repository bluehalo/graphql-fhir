const {
	GraphQLList,
	GraphQLString,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary MedicationAdministrationdosage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationAdministrationdosage',
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
				'Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.',
		},
		text: {
			type: GraphQLString,
			description:
				'Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		siteCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				"A coded specification of the anatomic site where the medication first entered the body.  For example, 'left arm'.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		siteReference: {
			type: new GraphQLUnionType({
				name: 'MedicationAdministrationdosagesiteReference_siteReference_Union',
				description:
					"A coded specification of the anatomic site where the medication first entered the body.  For example, 'left arm'.",
				types: () => [require('./bodysite.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'BodySite') {
						return require('./bodysite.schema.js');
					}
				},
			}),
			description:
				"A coded specification of the anatomic site where the medication first entered the body.  For example, 'left arm'.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/route-codes
		route: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.',
		},
		method: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description:
				'The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.',
		},
		rateRatio: {
			type: require('./ratio.schema.js'),
			description:
				"Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of '1' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.",
		},
		rateRange: {
			type: require('./range.schema.js'),
			description:
				"Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of '1' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.",
		},
	}),
});
