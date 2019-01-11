const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary FamilyMemberHistorycondition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'FamilyMemberHistorycondition_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				"The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-outcome
		outcome: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.',
		},
		onsetQuantity: {
			type: require('./quantity.input.js'),
			description:
				'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.',
		},
		onsetRange: {
			type: require('./range.input.js'),
			description:
				'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.',
		},
		onsetPeriod: {
			type: require('./period.input.js'),
			description:
				'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.',
		},
		_onsetString: {
			type: require('./element.input.js'),
			description:
				'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.',
		},
		onsetString: {
			type: GraphQLString,
			description:
				'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.',
		},
		note: {
			type: require('./annotation.input.js'),
			description:
				'An area where general notes can be placed about this specific condition.',
		},
	}),
});
