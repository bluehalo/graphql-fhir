const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary FamilyMemberHistorycondition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'FamilyMemberHistorycondition',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				"The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-outcome
		outcome: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.',
		},
		onsetAge: {
			type: require('./age.schema.js'),
			description:
				'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.',
		},
		onsetRange: {
			type: require('./range.schema.js'),
			description:
				'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.',
		},
		onsetPeriod: {
			type: require('./period.schema.js'),
			description:
				'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.',
		},
		_onsetString: {
			type: require('./element.schema.js'),
			description:
				'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.',
		},
		onsetString: {
			type: GraphQLString,
			description:
				'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'An area where general notes can be placed about this specific condition.',
		},
	}),
});
