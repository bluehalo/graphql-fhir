const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationAdministrationDosage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationAdministrationDosage_Input',
	description: 'Describes the medication dosage information details e.g. dose, rate, site, route, etc.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		text: {
			type: GraphQLString,
			description: 'Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.  The dosage instructions should reflect the dosage of the medication that was administered.'
		},
		_text: {
			type: require('./element.input'),
			description: 'Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.  The dosage instructions should reflect the dosage of the medication that was administered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/approach-site-codes
		site: {
			type: require('./codeableconcept.input'),
			description: 'A coded specification of the anatomic site where the medication first entered the body.  For example, \'left arm\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/route-codes
		route: {
			type: require('./codeableconcept.input'),
			description: 'A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/administration-method-codes
		method: {
			type: require('./codeableconcept.input'),
			description: 'A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.'
		},
		dose: {
			type: require('./quantity.input'),
			description: 'The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.'
		},
		rateRatio: {
			type: require('./ratio.input'),
			description: 'Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.'
		},
		rateQuantity: {
			type: require('./quantity.input'),
			description: 'Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.'
		}
	})
});
