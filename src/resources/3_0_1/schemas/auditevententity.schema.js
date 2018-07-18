const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary AuditEventEntity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEventEntity',
	description: 'Specific instances of data or objects that have been accessed.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: require('./identifier.schema'),
			description: 'Identifies a specific instance of the entity. The reference should always be version specific.'
		},
		reference: {
			type: require('./reference.schema'),
			description: 'Identifies a specific instance of the entity. The reference should be version specific.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/audit-entity-type
		type: {
			type: require('./coding.schema'),
			description: 'The type of the object that was involved in this audit event.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/object-role
		role: {
			type: require('./coding.schema'),
			description: 'Code representing the role the entity played in the event being audited.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/object-lifecycle-events
		lifecycle: {
			type: require('./coding.schema'),
			description: 'Identifier for the data life-cycle stage for the entity.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'Security labels for the identified entity.'
		},
		name: {
			type: GraphQLString,
			description: 'A name of the entity in the audit event.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A name of the entity in the audit event.'
		},
		description: {
			type: GraphQLString,
			description: 'Text that describes the entity in more detail.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Text that describes the entity in more detail.'
		},
		query: {
			type: Base64BinaryScalar,
			description: 'The query parameters for a query-type entities.'
		},
		_query: {
			type: require('./element.schema'),
			description: 'The query parameters for a query-type entities.'
		},
		detail: {
			type: new GraphQLList(require('./auditevententitydetail.schema')),
			description: 'Tagged value pairs for conveying additional information about the entity.'
		}
	})
});
