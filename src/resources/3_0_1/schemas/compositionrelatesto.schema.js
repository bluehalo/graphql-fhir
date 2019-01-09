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
 * @summary CompositionrelatesTo Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CompositionrelatesTo',
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
		_code: {
			type: require('./element.schema.js'),
			description:
				'The type of relationship that this composition has with anther composition or document.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/document-relationship-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of relationship that this composition has with anther composition or document.',
		},
		targetIdentifier: {
			type: new GraphQLNonNull(require('./identifier.schema.js')),
			description: 'The target composition/document of this relationship.',
		},
		targetReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CompositionrelatesTotargetReference_targetReference_Union',
					description: 'The target composition/document of this relationship.',
					types: () => [require('./composition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Composition') {
							return require('./composition.schema.js');
						}
					},
				}),
			),
			description: 'The target composition/document of this relationship.',
		},
	}),
});
