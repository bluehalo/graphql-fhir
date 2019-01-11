const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary NamingSystemuniqueId Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NamingSystemuniqueId',
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
		_type: {
			type: require('./element.schema.js'),
			description:
				'Identifies the unique identifier scheme used for this particular identifier.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/namingsystem-identifier-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Identifies the unique identifier scheme used for this particular identifier.',
		},
		_value: {
			type: require('./element.schema.js'),
			description:
				'The string that should be sent over the wire to identify the code system or identifier system.',
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The string that should be sent over the wire to identify the code system or identifier system.',
		},
		_preferred: {
			type: require('./element.schema.js'),
			description:
				"Indicates whether this identifier is the 'preferred' identifier of this type.",
		},
		preferred: {
			type: GraphQLBoolean,
			description:
				"Indicates whether this identifier is the 'preferred' identifier of this type.",
		},
		_comment: {
			type: require('./element.schema.js'),
			description: 'Notes about the past or intended usage of this identifier.',
		},
		comment: {
			type: GraphQLString,
			description: 'Notes about the past or intended usage of this identifier.',
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'Identifies the period of time over which this identifier is considered appropriate to refer to the naming system.  Outside of this window, the identifier might be non-deterministic.',
		},
	}),
});
