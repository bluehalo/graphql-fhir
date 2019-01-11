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
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Device Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Device',
	description: 'Base StructureDefinition for Device Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Device_Enum_schema',
					values: { Device: { value: 'Device' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
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
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Unique instance identifiers assigned to a device by organizations like manufacturers or owners. If the identifier identifies the type of device, Device.type should be used.',
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'Code or identifier to identify a kind of device.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Descriptive information, usage information or implantation information that is not captured in an existing element.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'Status of the Device availability.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/devicestatus
		status: {
			type: CodeScalar,
			description: 'Status of the Device availability.',
		},
		_manufacturer: {
			type: require('./element.schema.js'),
			description: 'A name of the manufacturer.',
		},
		manufacturer: {
			type: GraphQLString,
			description: 'A name of the manufacturer.',
		},
		_model: {
			type: require('./element.schema.js'),
			description:
				"The 'model' is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.",
		},
		model: {
			type: GraphQLString,
			description:
				"The 'model' is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.",
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.',
		},
		version: {
			type: GraphQLString,
			description:
				'The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.',
		},
		_manufactureDate: {
			type: require('./element.schema.js'),
			description: 'The date and time when the device was manufactured.',
		},
		manufactureDate: {
			type: DateTimeScalar,
			description: 'The date and time when the device was manufactured.',
		},
		_expiry: {
			type: require('./element.schema.js'),
			description:
				'The date and time beyond which this device is no longer valid or should not be used (if applicable).',
		},
		expiry: {
			type: DateTimeScalar,
			description:
				'The date and time beyond which this device is no longer valid or should not be used (if applicable).',
		},
		_udi: {
			type: require('./element.schema.js'),
			description:
				'United States Food and Drug Administration mandated Unique Device Identifier (UDI). Use the human readable information (the content that the user sees, which is sometimes different to the exact syntax represented in the barcode)  - see http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm.',
		},
		udi: {
			type: GraphQLString,
			description:
				'United States Food and Drug Administration mandated Unique Device Identifier (UDI). Use the human readable information (the content that the user sees, which is sometimes different to the exact syntax represented in the barcode)  - see http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm.',
		},
		_lotNumber: {
			type: require('./element.schema.js'),
			description: 'Lot number assigned by the manufacturer.',
		},
		lotNumber: {
			type: GraphQLString,
			description: 'Lot number assigned by the manufacturer.',
		},
		owner: {
			type: new GraphQLUnionType({
				name: 'Deviceowner_owner_Union',
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
		location: {
			type: new GraphQLUnionType({
				name: 'Devicelocation_location_Union',
				description: 'The place where the device can be found.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'The place where the device can be found.',
		},
		patient: {
			type: new GraphQLUnionType({
				name: 'Devicepatient_patient_Union',
				description:
					'Patient information, if the resource is affixed to a person.',
				types: () => [require('./patient.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description:
				'Patient information, if the resource is affixed to a person.',
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
	}),
});
