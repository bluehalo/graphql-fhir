const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary AuditEvent.object Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEventObject',
	description: 'Specific instances of data or objects that have been accessed.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: require('./identifier.schema'),
			description: 'Identifies a specific instance of the participant object. The reference should always be version specific.'
		},
		reference: {
			type: require('./reference.schema'),
			description: 'Identifies a specific instance of the participant object. The reference should always be version specific.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/object-type
		type: {
			type: require('./coding.schema'),
			description: 'The type of the object that was involved in this audit event.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/object-role
		role: {
			type: require('./coding.schema'),
			description: 'Code representing the functional application role of Participant Object being audited.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/object-lifecycle
		lifecycle: {
			type: require('./coding.schema'),
			description: 'Identifier for the data life-cycle stage for the participant object.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'Denotes security labels for the identified object.'
		},
		name: {
			type: GraphQLString,
			description: 'An instance-specific descriptor of the Participant Object ID audited, such as a person\'s name.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'An instance-specific descriptor of the Participant Object ID audited, such as a person\'s name.'
		},
		description: {
			type: GraphQLString,
			description: 'Text that describes the object in more detail.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Text that describes the object in more detail.'
		},
		query: {
			type: Base64BinaryScalar,
			description: 'The actual query for a query-type participant object.'
		},
		_query: {
			type: require('./element.schema'),
			description: 'The actual query for a query-type participant object.'
		},
		detail: {
			type: new GraphQLList(require('./auditeventobjectdetail.schema')),
			description: 'Additional Information about the Object.'
		}
	})
});
