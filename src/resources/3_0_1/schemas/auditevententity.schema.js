const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');

/**
 * @name exports
 * @summary AuditEvententity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEvententity',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'Identifies a specific instance of the entity. The reference should always be version specific.',
		},
		reference: {
			type: new GraphQLUnionType({
				name: 'AuditEvententityreference_reference_Union',
				description:
					'Identifies a specific instance of the entity. The reference should be version specific.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'Identifies a specific instance of the entity. The reference should be version specific.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/audit-entity-type
		type: {
			type: require('./coding.schema.js'),
			description:
				'The type of the object that was involved in this audit event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/object-role
		role: {
			type: require('./coding.schema.js'),
			description:
				'Code representing the role the entity played in the event being audited.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/object-lifecycle-events
		lifecycle: {
			type: require('./coding.schema.js'),
			description: 'Identifier for the data life-cycle stage for the entity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.schema.js')),
			description: 'Security labels for the identified entity.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'A name of the entity in the audit event.',
		},
		name: {
			type: GraphQLString,
			description: 'A name of the entity in the audit event.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'Text that describes the entity in more detail.',
		},
		description: {
			type: GraphQLString,
			description: 'Text that describes the entity in more detail.',
		},
		_query: {
			type: require('./element.schema.js'),
			description: 'The query parameters for a query-type entities.',
		},
		query: {
			type: Base64BinaryScalar,
			description: 'The query parameters for a query-type entities.',
		},
		detail: {
			type: new GraphQLList(require('./auditevententitydetail.schema.js')),
			description:
				'Tagged value pairs for conveying additional information about the entity.',
		},
	}),
});
