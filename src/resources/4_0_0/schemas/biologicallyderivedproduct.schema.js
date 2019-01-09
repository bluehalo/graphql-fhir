const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLInt,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary BiologicallyDerivedProduct Schema
 */
module.exports = new GraphQLObjectType({
	name: 'BiologicallyDerivedProduct',
	description:
		'A material substance originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'BiologicallyDerivedProduct_Enum_schema',
					values: {
						BiologicallyDerivedProduct: { value: 'BiologicallyDerivedProduct' },
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
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'This records identifiers associated with this biologically derived product instance that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).',
		},
		_productCategory: {
			type: require('./element.schema.js'),
			description: 'Broad category of this product.',
		},
		productCategory: {
			type: CodeScalar,
			description: 'Broad category of this product.',
		},
		productCode: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code that identifies the kind of this biologically derived product (SNOMED Ctcode).',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'Whether the product is currently available.',
		},
		status: {
			type: CodeScalar,
			description: 'Whether the product is currently available.',
		},
		request: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'BiologicallyDerivedProductrequest_request_Union',
					description:
						'Procedure request to obtain this biologically derived product.',
					types: () => [require('./servicerequest.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ServiceRequest') {
							return require('./servicerequest.schema.js');
						}
					},
				}),
			),
			description:
				'Procedure request to obtain this biologically derived product.',
		},
		_quantity: {
			type: require('./element.schema.js'),
			description: 'Number of discrete units within this product.',
		},
		quantity: {
			type: GraphQLInt,
			description: 'Number of discrete units within this product.',
		},
		parent: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'BiologicallyDerivedProductparent_parent_Union',
					description: 'Parent product (if any).',
					types: () => [require('./biologicallyderivedproduct.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'BiologicallyDerivedProduct') {
							return require('./biologicallyderivedproduct.schema.js');
						}
					},
				}),
			),
			description: 'Parent product (if any).',
		},
		collection: {
			type: require('./biologicallyderivedproductcollection.schema.js'),
			description: 'How this product was collected.',
		},
		processing: {
			type: new GraphQLList(
				require('./biologicallyderivedproductprocessing.schema.js'),
			),
			description:
				'Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.',
		},
		manipulation: {
			type: require('./biologicallyderivedproductmanipulation.schema.js'),
			description:
				'Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion.',
		},
		storage: {
			type: new GraphQLList(
				require('./biologicallyderivedproductstorage.schema.js'),
			),
			description: 'Product storage.',
		},
	}),
});
