const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SubstanceSpecificationstructure Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceSpecificationstructure',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		stereochemistry: {
			type: require('./codeableconcept.schema.js'),
			description: 'Stereochemistry type.',
		},
		opticalActivity: {
			type: require('./codeableconcept.schema.js'),
			description: 'Optical activity type.',
		},
		_molecularFormula: {
			type: require('./element.schema.js'),
			description: 'Molecular formula.',
		},
		molecularFormula: {
			type: GraphQLString,
			description: 'Molecular formula.',
		},
		_molecularFormulaByMoiety: {
			type: require('./element.schema.js'),
			description:
				'Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.',
		},
		molecularFormulaByMoiety: {
			type: GraphQLString,
			description:
				'Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.',
		},
		isotope: {
			type: new GraphQLList(
				require('./substancespecificationstructureisotope.schema.js'),
			),
			description:
				'Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.',
		},
		source: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'SubstanceSpecificationstructuresource_source_Union',
					description: 'Supporting literature.',
					types: () => [require('./documentreference.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
					},
				}),
			),
			description: 'Supporting literature.',
		},
		representation: {
			type: new GraphQLList(
				require('./substancespecificationstructurerepresentation.schema.js'),
			),
			description: 'Molecular structural representation.',
		},
	}),
});
