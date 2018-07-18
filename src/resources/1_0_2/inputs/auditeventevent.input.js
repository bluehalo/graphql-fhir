const CodeScalar = require('../scalars/code.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary AuditEventEvent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventEvent_Input',
	description: 'Identifies the name, action type, time, and disposition of the audited event.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/audit-event-type
		type: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/audit-event-sub-type
		subtype: {
			type: new GraphQLList(require('./coding.input')),
			description: 'Identifier for the category of event.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/audit-event-action
		action: {
			type: CodeScalar,
			description: 'Indicator for type of action performed during the event that generated the audit.'
		},
		_action: {
			type: require('./element.input'),
			description: 'Indicator for type of action performed during the event that generated the audit.'
		},
		dateTime: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'The time when the event occurred on the source.'
		},
		_dateTime: {
			type: require('./element.input'),
			description: 'The time when the event occurred on the source.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/audit-event-outcome
		outcome: {
			type: CodeScalar,
			description: 'Indicates whether the event succeeded or failed.'
		},
		_outcome: {
			type: require('./element.input'),
			description: 'Indicates whether the event succeeded or failed.'
		},
		outcomeDesc: {
			type: GraphQLString,
			description: 'A free text description of the outcome of the event.'
		},
		_outcomeDesc: {
			type: require('./element.input'),
			description: 'A free text description of the outcome of the event.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		purposeOfEvent: {
			type: new GraphQLList(require('./coding.input')),
			description: 'The purposeOfUse (reason) that was used during the event being recorded.'
		}
	})
});
