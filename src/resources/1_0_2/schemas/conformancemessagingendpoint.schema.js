const { GraphQLList, GraphQLNonNull, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Conformancemessagingendpoint Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Conformancemessagingendpoint',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-transport
		protocol: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description:
				'A list of the messaging transport protocol(s) identifiers, supported by this endpoint.',
		},
		_address: {
			type: require('./element.schema.js'),
			description:
				'The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.',
		},
		address: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.',
		},
	}),
});
