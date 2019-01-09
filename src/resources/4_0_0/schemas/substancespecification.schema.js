const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary SubstanceSpecification Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceSpecification',
	description:
		'The detailed description of a substance, typically at a level beyond what is used for prescribing.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'SubstanceSpecification_Enum_schema',
					values: {
						SubstanceSpecification: { value: 'SubstanceSpecification' },
					},
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description: 'Identifier by which this substance is known.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'High level categorization, e.g. polymer or nucleic acid.',
		},
		status: {
			type: require('./codeableconcept.schema.js'),
			description: 'Status of substance within the catalogue e.g. approved.',
		},
		domain: {
			type: require('./codeableconcept.schema.js'),
			description: 'If the substance applies to only human or veterinary use.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'Textual description of the substance.',
		},
		description: {
			type: GraphQLString,
			description: 'Textual description of the substance.',
		},
		source: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'SubstanceSpecificationsource_source_Union',
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
		_comment: {
			type: require('./element.schema.js'),
			description: 'Textual comment about this record of a substance.',
		},
		comment: {
			type: GraphQLString,
			description: 'Textual comment about this record of a substance.',
		},
		moiety: {
			type: new GraphQLList(
				require('./substancespecificationmoiety.schema.js'),
			),
			description: 'Moiety, for structural modifications.',
		},
		property: {
			type: new GraphQLList(
				require('./substancespecificationproperty.schema.js'),
			),
			description:
				'General specifications for this substance, including how it is related to other substances.',
		},
		referenceInformation: {
			type: new GraphQLUnionType({
				name:
					'SubstanceSpecificationreferenceInformation_referenceInformation_Union',
				description: 'General information detailing this substance.',
				types: () => [require('./substancereferenceinformation.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'SubstanceReferenceInformation') {
						return require('./substancereferenceinformation.schema.js');
					}
				},
			}),
			description: 'General information detailing this substance.',
		},
		structure: {
			type: require('./substancespecificationstructure.schema.js'),
			description: 'Structural information.',
		},
		code: {
			type: new GraphQLList(require('./substancespecificationcode.schema.js')),
			description: 'Codes associated with the substance.',
		},
		name: {
			type: new GraphQLList(require('./substancespecificationname.schema.js')),
			description: 'Names applicable to this substance.',
		},
		relationship: {
			type: new GraphQLList(
				require('./substancespecificationrelationship.schema.js'),
			),
			description:
				'A link between this substance and another, with details of the relationship.',
		},
		nucleicAcid: {
			type: new GraphQLUnionType({
				name: 'SubstanceSpecificationnucleicAcid_nucleicAcid_Union',
				description: 'Data items specific to nucleic acids.',
				types: () => [require('./substancenucleicacid.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'SubstanceNucleicAcid') {
						return require('./substancenucleicacid.schema.js');
					}
				},
			}),
			description: 'Data items specific to nucleic acids.',
		},
		polymer: {
			type: new GraphQLUnionType({
				name: 'SubstanceSpecificationpolymer_polymer_Union',
				description: 'Data items specific to polymers.',
				types: () => [require('./substancepolymer.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'SubstancePolymer') {
						return require('./substancepolymer.schema.js');
					}
				},
			}),
			description: 'Data items specific to polymers.',
		},
		protein: {
			type: new GraphQLUnionType({
				name: 'SubstanceSpecificationprotein_protein_Union',
				description: 'Data items specific to proteins.',
				types: () => [require('./substanceprotein.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'SubstanceProtein') {
						return require('./substanceprotein.schema.js');
					}
				},
			}),
			description: 'Data items specific to proteins.',
		},
		sourceMaterial: {
			type: new GraphQLUnionType({
				name: 'SubstanceSpecificationsourceMaterial_sourceMaterial_Union',
				description:
					'Material or taxonomic/anatomical source for the substance.',
				types: () => [require('./substancesourcematerial.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'SubstanceSourceMaterial') {
						return require('./substancesourcematerial.schema.js');
					}
				},
			}),
			description: 'Material or taxonomic/anatomical source for the substance.',
		},
	}),
});
