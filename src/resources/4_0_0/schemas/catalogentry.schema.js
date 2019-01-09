const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary CatalogEntry Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CatalogEntry',
	description:
		'Catalog entries are wrappers that contextualize items included in a catalog.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'CatalogEntry_Enum_schema',
					values: { CatalogEntry: { value: 'CatalogEntry' } },
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
				'Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of item - medication, device, service, protocol or other.',
		},
		_orderable: {
			type: require('./element.schema.js'),
			description: 'Whether the entry represents an orderable item.',
		},
		orderable: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Whether the entry represents an orderable item.',
		},
		referencedItem: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CatalogEntryreferencedItem_referencedItem_Union',
					description: 'The item in a catalog or definition.',
					types: () => [
						require('./medication.schema.js'),
						require('./device.schema.js'),
						require('./organization.schema.js'),
						require('./practitioner.schema.js'),
						require('./practitionerrole.schema.js'),
						require('./healthcareservice.schema.js'),
						require('./activitydefinition.schema.js'),
						require('./plandefinition.schema.js'),
						require('./specimendefinition.schema.js'),
						require('./observationdefinition.schema.js'),
						require('./binary.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Medication') {
							return require('./medication.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'PractitionerRole') {
							return require('./practitionerrole.schema.js');
						}
						if (data && data.resourceType === 'HealthcareService') {
							return require('./healthcareservice.schema.js');
						}
						if (data && data.resourceType === 'ActivityDefinition') {
							return require('./activitydefinition.schema.js');
						}
						if (data && data.resourceType === 'PlanDefinition') {
							return require('./plandefinition.schema.js');
						}
						if (data && data.resourceType === 'SpecimenDefinition') {
							return require('./specimendefinition.schema.js');
						}
						if (data && data.resourceType === 'ObservationDefinition') {
							return require('./observationdefinition.schema.js');
						}
						if (data && data.resourceType === 'Binary') {
							return require('./binary.schema.js');
						}
					},
				}),
			),
			description: 'The item in a catalog or definition.',
		},
		additionalIdentifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'Used in supporting related concepts, e.g. NDC to RxNorm.',
		},
		classification: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Classes of devices, or ATC for medication.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.',
		},
		status: {
			type: CodeScalar,
			description:
				'Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.',
		},
		validityPeriod: {
			type: require('./period.schema.js'),
			description:
				'The time period in which this catalog entry is expected to be active.',
		},
		_validTo: {
			type: require('./element.schema.js'),
			description:
				'The date until which this catalog entry is expected to be active.',
		},
		validTo: {
			type: DateTimeScalar,
			description:
				'The date until which this catalog entry is expected to be active.',
		},
		_lastUpdated: {
			type: require('./element.schema.js'),
			description:
				'Typically date of issue is different from the beginning of the validity. This can be used to see when an item was last updated.',
		},
		lastUpdated: {
			type: DateTimeScalar,
			description:
				'Typically date of issue is different from the beginning of the validity. This can be used to see when an item was last updated.',
		},
		additionalCharacteristic: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Used for examplefor Out of Formulary, or any specifics.',
		},
		additionalClassification: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'User for example for ATC classification, or.',
		},
		relatedEntry: {
			type: new GraphQLList(require('./catalogentryrelatedentry.schema.js')),
			description:
				'Used for example, to point to a substance, or to a device used to administer a medication.',
		},
	}),
});
