const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary FamilyMemberHistoryCondition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'FamilyMemberHistoryCondition_Input',
	description: 'The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like \'cancer\' depending on how much is known about the condition and the capabilities of the creating system.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/condition-outcome
		outcome: {
			type: require('./codeableconcept.input'),
			description: 'Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.'
		},
		onsetAge: {
			type: require('./age.input'),
			description: 'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.'
		},
		onsetRange: {
			type: require('./range.input'),
			description: 'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.'
		},
		onsetPeriod: {
			type: require('./period.input'),
			description: 'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.'
		},
		onsetString: {
			type: GraphQLString,
			description: 'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.'
		},
		_onsetString: {
			type: require('./element.input'),
			description: 'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'An area where general notes can be placed about this specific condition.'
		}
	})
});
