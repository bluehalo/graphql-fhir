const {
	GraphQLList,
	GraphQLString,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Specimentreatment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Specimentreatment',
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
		_description: {
			type: require('./element.schema.js'),
			description: 'Textual description of procedure.',
		},
		description: {
			type: GraphQLString,
			description: 'Textual description of procedure.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/specimen-treatment-procedure
		procedure: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A coded value specifying the procedure used to process the specimen.',
		},
		additive: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Specimentreatmentadditive_additive_Union',
					description: 'Material used in the processing step.',
					types: () => [require('./substance.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Substance') {
							return require('./substance.schema.js');
						}
					},
				}),
			),
			description: 'Material used in the processing step.',
		},
	}),
});
