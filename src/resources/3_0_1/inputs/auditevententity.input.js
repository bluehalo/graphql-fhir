const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLInputObjectType, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AuditEvent.entity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventEntity_Input',
	description: 'Specific instances of data or objects that have been accessed.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: require('./identifier.input'),
			description: 'Identifies a specific instance of the entity. The reference should always be version specific.'
		},
		reference: {
			type: require('./reference.input'),
			description: 'Identifies a specific instance of the entity. The reference should be version specific.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/audit-entity-type
		type: {
			type: require('./coding.input'),
			description: 'The type of the object that was involved in this audit event.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/object-role
		role: {
			type: require('./coding.input'),
			description: 'Code representing the role the entity played in the event being audited.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/object-lifecycle-events
		lifecycle: {
			type: require('./coding.input'),
			description: 'Identifier for the data life-cycle stage for the entity.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.input')),
			description: 'Security labels for the identified entity.'
		},
		name: {
			type: GraphQLString,
			description: 'A name of the entity in the audit event.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A name of the entity in the audit event.'
		},
		description: {
			type: GraphQLString,
			description: 'Text that describes the entity in more detail.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Text that describes the entity in more detail.'
		},
		query: {
			type: Base64BinaryScalar,
			description: 'The query parameters for a query-type entities.'
		},
		_query: {
			type: require('./element.input'),
			description: 'The query parameters for a query-type entities.'
		},
		detail: {
			type: new GraphQLList(require('./auditevententitydetail.input')),
			description: 'Tagged value pairs for conveying additional information about the entity.'
		}
	})
});
