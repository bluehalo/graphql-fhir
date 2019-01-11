const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

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
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				"The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.",
		},
		outcome: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation.',
		},
		_contributedToDeath: {
			type: require('./element.input.js'),
			description:
				'This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.',
		},
		contributedToDeath: {
			type: GraphQLBoolean,
			description:
				'This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.',
		},
		onsetAge: {
			type: require('./age.input.js'),
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
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'An area where general notes can be placed about this specific condition.',
		},
	}),
});
