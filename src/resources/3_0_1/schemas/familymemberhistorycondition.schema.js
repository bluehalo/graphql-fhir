const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary FamilyMemberHistoryCondition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'FamilyMemberHistoryCondition',
	description: 'The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like \'cancer\' depending on how much is known about the condition and the capabilities of the creating system.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-outcome
		outcome: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.'
		},
		onsetAge: {
			type: require('./age.schema'),
			description: 'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.'
		},
		onsetRange: {
			type: require('./range.schema'),
			description: 'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.'
		},
		onsetPeriod: {
			type: require('./period.schema'),
			description: 'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.'
		},
		onsetString: {
			type: GraphQLString,
			description: 'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.'
		},
		_onsetString: {
			type: require('./element.schema'),
			description: 'Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'An area where general notes can be placed about this specific condition.'
		}
	})
});
