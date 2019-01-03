const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLInputObjectType, GraphQLList, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary AuditEvent.object Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventObject_Input',
	description: 'Specific instances of data or objects that have been accessed.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: require('./identifier.input'),
			description: 'Identifies a specific instance of the participant object. The reference should always be version specific.'
		},
		reference: {
			type: require('./reference.input'),
			description: 'Identifies a specific instance of the participant object. The reference should always be version specific.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/object-type
		type: {
			type: require('./coding.input'),
			description: 'The type of the object that was involved in this audit event.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/object-role
		role: {
			type: require('./coding.input'),
			description: 'Code representing the functional application role of Participant Object being audited.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/object-lifecycle
		lifecycle: {
			type: require('./coding.input'),
			description: 'Identifier for the data life-cycle stage for the participant object.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.input')),
			description: 'Denotes security labels for the identified object.'
		},
		name: {
			type: GraphQLString,
			description: 'An instance-specific descriptor of the Participant Object ID audited, such as a person\'s name.'
		},
		_name: {
			type: require('./element.input'),
			description: 'An instance-specific descriptor of the Participant Object ID audited, such as a person\'s name.'
		},
		description: {
			type: GraphQLString,
			description: 'Text that describes the object in more detail.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Text that describes the object in more detail.'
		},
		query: {
			type: Base64BinaryScalar,
			description: 'The actual query for a query-type participant object.'
		},
		_query: {
			type: require('./element.input'),
			description: 'The actual query for a query-type participant object.'
		},
		detail: {
			type: new GraphQLList(require('./auditeventobjectdetail.input')),
			description: 'Additional Information about the Object.'
		}
	})
});
