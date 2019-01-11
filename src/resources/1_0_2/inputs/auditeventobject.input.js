const {
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');

/**
 * @name exports
 * @summary AuditEventobject Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventobject_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: require('./identifier.input.js'),
			description:
				'Identifies a specific instance of the participant object. The reference should always be version specific.',
		},
		reference: {
			type: GraphQLString,
			description:
				'Identifies a specific instance of the participant object. The reference should always be version specific.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/object-type
		type: {
			type: require('./coding.input.js'),
			description:
				'The type of the object that was involved in this audit event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/object-role
		role: {
			type: require('./coding.input.js'),
			description:
				'Code representing the functional application role of Participant Object being audited.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/object-lifecycle
		lifecycle: {
			type: require('./coding.input.js'),
			description:
				'Identifier for the data life-cycle stage for the participant object.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.input.js')),
			description: 'Denotes security labels for the identified object.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				"An instance-specific descriptor of the Participant Object ID audited, such as a person's name.",
		},
		name: {
			type: GraphQLString,
			description:
				"An instance-specific descriptor of the Participant Object ID audited, such as a person's name.",
		},
		_description: {
			type: require('./element.input.js'),
			description: 'Text that describes the object in more detail.',
		},
		description: {
			type: GraphQLString,
			description: 'Text that describes the object in more detail.',
		},
		_query: {
			type: require('./element.input.js'),
			description: 'The actual query for a query-type participant object.',
		},
		query: {
			type: Base64BinaryScalar,
			description: 'The actual query for a query-type participant object.',
		},
		detail: {
			type: new GraphQLList(require('./auditeventobjectdetail.input.js')),
			description: 'Additional Information about the Object.',
		},
	}),
});
