const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Consentexceptdata Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Consentexceptdata',
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
		_meaning: {
			type: require('./element.schema.js'),
			description:
				'How the resource reference is interpreted when testing consent restrictions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-data-meaning
		meaning: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'How the resource reference is interpreted when testing consent restrictions.',
		},
		reference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Consentexceptdatareference_reference_Union',
					description:
						'A reference to a specific resource that defines which resources are covered by this consent.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'A reference to a specific resource that defines which resources are covered by this consent.',
		},
	}),
});
