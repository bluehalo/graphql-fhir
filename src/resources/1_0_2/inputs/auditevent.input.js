const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let AuditEventResourceInputType = new GraphQLEnumType({
	name: 'AuditEventResourceInputType',
	values: {
		AuditEvent: { value: 'AuditEvent' }
	}
});

/**
 * @name exports
 * @summary AuditEvent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEvent_Input',
	description: 'Base StructureDefinition for AuditEvent Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(AuditEventResourceInputType),
			description: 'Type of this resource'
		},
		event: {
			type: new GraphQLNonNull(require('./auditeventevent.input')),
			description: 'Identifies the name, action type, time, and disposition of the audited event.'
		},
		participant: {
			type: new GraphQLList(new GraphQLNonNull(require('./auditeventparticipant.input'))),
			description: 'A person, a hardware device or software process.'
		},
		source: {
			type: new GraphQLNonNull(require('./auditeventsource.input')),
			description: 'Application systems and processes.'
		},
		object: {
			type: new GraphQLList(require('./auditeventobject.input')),
			description: 'Specific instances of data or objects that have been accessed.'
		}
	})
});
