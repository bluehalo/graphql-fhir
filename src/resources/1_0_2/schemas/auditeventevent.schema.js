const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary AuditEventevent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEventevent',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-type
		type: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description:
				'Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-sub-type
		subtype: {
			type: new GraphQLList(require('./coding.schema.js')),
			description: 'Identifier for the category of event.',
		},
		_action: {
			type: require('./element.schema.js'),
			description:
				'Indicator for type of action performed during the event that generated the audit.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-action
		action: {
			type: CodeScalar,
			description:
				'Indicator for type of action performed during the event that generated the audit.',
		},
		_dateTime: {
			type: require('./element.schema.js'),
			description: 'The time when the event occurred on the source.',
		},
		dateTime: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'The time when the event occurred on the source.',
		},
		_outcome: {
			type: require('./element.schema.js'),
			description: 'Indicates whether the event succeeded or failed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-event-outcome
		outcome: {
			type: CodeScalar,
			description: 'Indicates whether the event succeeded or failed.',
		},
		_outcomeDesc: {
			type: require('./element.schema.js'),
			description: 'A free text description of the outcome of the event.',
		},
		outcomeDesc: {
			type: GraphQLString,
			description: 'A free text description of the outcome of the event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		purposeOfEvent: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'The purposeOfUse (reason) that was used during the event being recorded.',
		},
	}),
});
