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
 * @summary DeviceDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceDefinition',
	description:
		'The characteristics, operational status and capabilities of a medical-related component of a medical device.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DeviceDefinition_Enum_schema',
					values: { DeviceDefinition: { value: 'DeviceDefinition' } },
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
				'Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.',
		},
		udiDeviceIdentifier: {
			type: new GraphQLList(
				require('./devicedefinitionudideviceidentifier.schema.js'),
			),
			description:
				'Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.',
		},
		_manufacturerString: {
			type: require('./element.schema.js'),
			description: 'A name of the manufacturer.',
		},
		manufacturerString: {
			type: GraphQLString,
			description: 'A name of the manufacturer.',
		},
		manufacturerReference: {
			type: new GraphQLUnionType({
				name:
					'DeviceDefinitionmanufacturerReference_manufacturerReference_Union',
				description: 'A name of the manufacturer.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'A name of the manufacturer.',
		},
		deviceName: {
			type: new GraphQLList(require('./devicedefinitiondevicename.schema.js')),
			description: 'A name given to the device to identify it.',
		},
		_modelNumber: {
			type: require('./element.schema.js'),
			description: 'The model number for the device.',
		},
		modelNumber: {
			type: GraphQLString,
			description: 'The model number for the device.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'What kind of device or device system this is.',
		},
		specialization: {
			type: new GraphQLList(
				require('./devicedefinitionspecialization.schema.js'),
			),
			description:
				'The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The available versions of the device, e.g., software versions.',
		},
		version: {
			type: new GraphQLList(GraphQLString),
			description:
				'The available versions of the device, e.g., software versions.',
		},
		safety: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Safety characteristics of the device.',
		},
		shelfLifeStorage: {
			type: new GraphQLList(require('./productshelflife.schema.js')),
			description: 'Shelf Life and storage information.',
		},
		physicalCharacteristics: {
			type: require('./prodcharacteristic.schema.js'),
			description: 'Dimensions, color etc.',
		},
		languageCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Language code for the human-readable text strings produced by the device (all supported).',
		},
		capability: {
			type: new GraphQLList(require('./devicedefinitioncapability.schema.js')),
			description: 'Device capabilities.',
		},
		property: {
			type: new GraphQLList(require('./devicedefinitionproperty.schema.js')),
			description:
				'The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.',
		},
		owner: {
			type: new GraphQLUnionType({
				name: 'DeviceDefinitionowner_owner_Union',
				description:
					'An organization that is responsible for the provision and ongoing maintenance of the device.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'An organization that is responsible for the provision and ongoing maintenance of the device.',
		},
		contact: {
			type: new GraphQLList(require('./contactpoint.schema.js')),
			description:
				'Contact details for an organization or a particular human that is responsible for the device.',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'A network address on which the device may be contacted directly.',
		},
		url: {
			type: UriScalar,
			description:
				'A network address on which the device may be contacted directly.',
		},
		_onlineInformation: {
			type: require('./element.schema.js'),
			description: 'Access to on-line information about the device.',
		},
		onlineInformation: {
			type: UriScalar,
			description: 'Access to on-line information about the device.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Descriptive information, usage information or implantation information that is not captured in an existing element.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description:
				'The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).',
		},
		parentDevice: {
			type: new GraphQLUnionType({
				name: 'DeviceDefinitionparentDevice_parentDevice_Union',
				description: 'The parent device it can be part of.',
				types: () => [require('./devicedefinition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'DeviceDefinition') {
						return require('./devicedefinition.schema.js');
					}
				},
			}),
			description: 'The parent device it can be part of.',
		},
		material: {
			type: new GraphQLList(require('./devicedefinitionmaterial.schema.js')),
			description:
				'A substance used to create the material(s) of which the device is made.',
		},
	}),
});
