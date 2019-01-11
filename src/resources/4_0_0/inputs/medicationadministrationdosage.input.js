const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MedicationAdministrationdosage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationAdministrationdosage_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_text: {
			type: require('./element.input.js'),
			description:
				'Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.  The dosage instructions should reflect the dosage of the medication that was administered.',
		},
		text: {
			type: GraphQLString,
			description:
				'Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.  The dosage instructions should reflect the dosage of the medication that was administered.',
		},
		site: {
			type: require('./codeableconcept.input.js'),
			description:
				"A coded specification of the anatomic site where the medication first entered the body.  For example, 'left arm'.",
		},
		route: {
			type: require('./codeableconcept.input.js'),
			description:
				'A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.',
		},
		method: {
			type: require('./codeableconcept.input.js'),
			description:
				'A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.',
		},
		dose: {
			type: require('./quantity.input.js'),
			description:
				'The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.',
		},
		rateRatio: {
			type: require('./ratio.input.js'),
			description:
				'Identifies the speed with which the medication was or will be introduced into the patient.  Typically, the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time, e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.',
		},
		rateQuantity: {
			type: require('./quantity.input.js'),
			description:
				'Identifies the speed with which the medication was or will be introduced into the patient.  Typically, the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time, e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.',
		},
	}),
});
