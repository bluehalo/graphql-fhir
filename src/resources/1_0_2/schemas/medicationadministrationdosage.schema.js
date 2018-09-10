const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationAdministration.dosage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationAdministrationDosage',
	description: 'Describes the medication dosage information details e.g. dose, rate, site, route, etc.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		text: {
			type: GraphQLString,
			description: 'Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		siteCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'A coded specification of the anatomic site where the medication first entered the body.  For example, \'left arm\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		siteReference: {
			type: require('./reference.schema'),
			description: 'A coded specification of the anatomic site where the medication first entered the body.  For example, \'left arm\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/route-codes
		route: {
			type: require('./codeableconcept.schema'),
			description: 'A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.'
		},
		method: {
			type: require('./codeableconcept.schema'),
			description: 'A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.'
		},
		rateRatio: {
			type: require('./ratio.schema'),
			description: 'Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of \'1\' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.'
		},
		rateRange: {
			type: require('./range.schema'),
			description: 'Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of \'1\' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.'
		}
	})
});
