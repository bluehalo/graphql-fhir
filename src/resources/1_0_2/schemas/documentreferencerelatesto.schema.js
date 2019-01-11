const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary DocumentReferencerelatesTo Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentReferencerelatesTo',
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
		_code: {
			type: require('./element.schema.js'),
			description:
				'The type of relationship that this document has with anther document.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/document-relationship-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of relationship that this document has with anther document.',
		},
		target: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'DocumentReferencerelatesTotarget_target_Union',
					description: 'The target document of this relationship.',
					types: () => [require('./documentreference.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
					},
				}),
			),
			description: 'The target document of this relationship.',
		},
	}),
});
