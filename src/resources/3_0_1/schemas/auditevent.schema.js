const CodeScalar = require('../scalars/code.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary AuditEvent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEvent',
	description: 'Base StructureDefinition for AuditEvent Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/audit-event-type
		type: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/audit-event-sub-type
		subtype: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'Identifier for the category of event.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/audit-event-action
		action: {
			type: CodeScalar,
			description: 'Indicator for type of action performed during the event that generated the audit.'
		},
		_action: {
			type: require('./element.schema'),
			description: 'Indicator for type of action performed during the event that generated the audit.'
		},
		recorded: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'The time when the event occurred on the source.'
		},
		_recorded: {
			type: require('./element.schema'),
			description: 'The time when the event occurred on the source.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/audit-event-outcome
		outcome: {
			type: CodeScalar,
			description: 'Indicates whether the event succeeded or failed.'
		},
		_outcome: {
			type: require('./element.schema'),
			description: 'Indicates whether the event succeeded or failed.'
		},
		outcomeDesc: {
			type: GraphQLString,
			description: 'A free text description of the outcome of the event.'
		},
		_outcomeDesc: {
			type: require('./element.schema'),
			description: 'A free text description of the outcome of the event.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		purposeOfEvent: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The purposeOfUse (reason) that was used during the event being recorded.'
		},
		agent: {
			type: new GraphQLList(new GraphQLNonNull(require('./auditeventagent.schema'))),
			description: 'An actor taking an active role in the event or activity that is logged.'
		},
		source: {
			type: new GraphQLNonNull(require('./auditeventsource.schema')),
			description: 'The system that is reporting the event.'
		},
		entity: {
			type: new GraphQLList(require('./auditevententity.schema')),
			description: 'Specific instances of data or objects that have been accessed.'
		}
	})
});
