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
 * @summary MedicinalProduct Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicinalProduct',
	description:
		'Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MedicinalProduct_Enum_schema',
					values: { MedicinalProduct: { value: 'MedicinalProduct' } },
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
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'Business identifier for this product. Could be an MPID.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'Regulatory type, e.g. Investigational or Authorized.',
		},
		domain: {
			type: require('./coding.schema.js'),
			description: 'If this medicine applies to human or veterinary uses.',
		},
		combinedPharmaceuticalDoseForm: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The dose form for a single part product, or combined form of a multiple part product.',
		},
		legalStatusOfSupply: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The legal status of supply of the medicinal product as classified by the regulator.',
		},
		additionalMonitoringIndicator: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.',
		},
		_specialMeasures: {
			type: require('./element.schema.js'),
			description:
				'Whether the Medicinal Product is subject to special measures for regulatory reasons.',
		},
		specialMeasures: {
			type: new GraphQLList(GraphQLString),
			description:
				'Whether the Medicinal Product is subject to special measures for regulatory reasons.',
		},
		paediatricUseIndicator: {
			type: require('./codeableconcept.schema.js'),
			description: 'If authorised for use in children.',
		},
		productClassification: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Allows the product to be classified by various systems.',
		},
		marketingStatus: {
			type: new GraphQLList(require('./marketingstatus.schema.js')),
			description:
				'Marketing status of the medicinal product, in contrast to marketing authorizaton.',
		},
		pharmaceuticalProduct: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'MedicinalProductpharmaceuticalProduct_pharmaceuticalProduct_Union',
					description: 'Pharmaceutical aspects of product.',
					types: () => [require('./medicinalproductpharmaceutical.schema.js')],
					resolveType(data) {
						if (
							data &&
							data.resourceType === 'MedicinalProductPharmaceutical'
						) {
							return require('./medicinalproductpharmaceutical.schema.js');
						}
					},
				}),
			),
			description: 'Pharmaceutical aspects of product.',
		},
		packagedMedicinalProduct: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'MedicinalProductpackagedMedicinalProduct_packagedMedicinalProduct_Union',
					description: 'Package representation for the product.',
					types: () => [require('./medicinalproductpackaged.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'MedicinalProductPackaged') {
							return require('./medicinalproductpackaged.schema.js');
						}
					},
				}),
			),
			description: 'Package representation for the product.',
		},
		attachedDocument: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicinalProductattachedDocument_attachedDocument_Union',
					description:
						'Supporting documentation, typically for regulatory submission.',
					types: () => [require('./documentreference.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
					},
				}),
			),
			description:
				'Supporting documentation, typically for regulatory submission.',
		},
		masterFile: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicinalProductmasterFile_masterFile_Union',
					description:
						'A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).',
					types: () => [require('./documentreference.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
					},
				}),
			),
			description:
				'A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).',
		},
		contact: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicinalProductcontact_contact_Union',
					description:
						'A product specific contact, person (in a role), or an organization.',
					types: () => [
						require('./organization.schema.js'),
						require('./practitionerrole.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
						if (data && data.resourceType === 'PractitionerRole') {
							return require('./practitionerrole.schema.js');
						}
					},
				}),
			),
			description:
				'A product specific contact, person (in a role), or an organization.',
		},
		clinicalTrial: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicinalProductclinicalTrial_clinicalTrial_Union',
					description:
						'Clinical trials or studies that this product is involved in.',
					types: () => [require('./researchstudy.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ResearchStudy') {
							return require('./researchstudy.schema.js');
						}
					},
				}),
			),
			description:
				'Clinical trials or studies that this product is involved in.',
		},
		name: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./medicinalproductname.schema.js')),
			),
			description:
				"The product's name, including full name and possibly coded parts.",
		},
		crossReference: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Reference to another product, e.g. for linking authorised to investigational product.',
		},
		manufacturingBusinessOperation: {
			type: new GraphQLList(
				require('./medicinalproductmanufacturingbusinessoperation.schema.js'),
			),
			description:
				'An operation applied to the product, for manufacturing or adminsitrative purpose.',
		},
		specialDesignation: {
			type: new GraphQLList(
				require('./medicinalproductspecialdesignation.schema.js'),
			),
			description:
				'Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.',
		},
	}),
});
