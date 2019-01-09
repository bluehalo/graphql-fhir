const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');

/**
 * @name exports
 * @summary AuditEvententity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEvententity_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		what: {
			type: GraphQLString,
			description:
				'Identifies a specific instance of the entity. The reference should be version specific.',
		},
		type: {
			type: require('./coding.input.js'),
			description:
				'The type of the object that was involved in this audit event.',
		},
		role: {
			type: require('./coding.input.js'),
			description:
				'Code representing the role the entity played in the event being audited.',
		},
		lifecycle: {
			type: require('./coding.input.js'),
			description: 'Identifier for the data life-cycle stage for the entity.',
		},
		securityLabel: {
			type: new GraphQLList(require('./coding.input.js')),
			description: 'Security labels for the identified entity.',
		},
		_name: {
			type: require('./element.input.js'),
			description: 'A name of the entity in the audit event.',
		},
		name: {
			type: GraphQLString,
			description: 'A name of the entity in the audit event.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'Text that describes the entity in more detail.',
		},
		description: {
			type: GraphQLString,
			description: 'Text that describes the entity in more detail.',
		},
		_query: {
			type: require('./element.input.js'),
			description: 'The query parameters for a query-type entities.',
		},
		query: {
			type: Base64BinaryScalar,
			description: 'The query parameters for a query-type entities.',
		},
		detail: {
			type: new GraphQLList(require('./auditevententitydetail.input.js')),
			description:
				'Tagged value pairs for conveying additional information about the entity.',
		},
	}),
});
