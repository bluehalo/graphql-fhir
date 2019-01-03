const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let AuditEventResourceType = new GraphQLEnumType({
	name: 'AuditEventResourceType',
	values: {
		AuditEvent: { value: 'AuditEvent' }
	}
});

/**
 * @name exports
 * @summary AuditEvent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEvent',
	description: 'Base StructureDefinition for AuditEvent Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(AuditEventResourceType),
			description: 'Type of this resource.'
		},
		event: {
			type: new GraphQLNonNull(require('./auditeventevent.schema')),
			description: 'Identifies the name, action type, time, and disposition of the audited event.'
		},
		participant: {
			type: new GraphQLList(new GraphQLNonNull(require('./auditeventparticipant.schema'))),
			description: 'A person, a hardware device or software process.'
		},
		source: {
			type: new GraphQLNonNull(require('./auditeventsource.schema')),
			description: 'Application systems and processes.'
		},
		object: {
			type: new GraphQLList(require('./auditeventobject.schema')),
			description: 'Specific instances of data or objects that have been accessed.'
		}
	})
});
