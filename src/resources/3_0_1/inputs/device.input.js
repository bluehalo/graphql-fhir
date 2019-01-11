const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Device Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Device_Input',
	description: 'Base StructureDefinition for Device Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Device_Enum_input',
					values: { Device: { value: 'Device' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Unique instance identifiers assigned to a device by manufacturers other organizations or owners.',
		},
		udi: {
			type: require('./deviceudi.input.js'),
			description:
				'[Unique device identifier (UDI)](device.html#5.11.3.2.2) assigned to device label or package.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'Status of the Device availability.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/device-status
		status: {
			type: CodeScalar,
			description: 'Status of the Device availability.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/device-kind
		type: {
			type: require('./codeableconcept.input.js'),
			description: 'Code or identifier to identify a kind of device.',
		},
		_lotNumber: {
			type: require('./element.input.js'),
			description: 'Lot number assigned by the manufacturer.',
		},
		lotNumber: {
			type: GraphQLString,
			description: 'Lot number assigned by the manufacturer.',
		},
		_manufacturer: {
			type: require('./element.input.js'),
			description: 'A name of the manufacturer.',
		},
		manufacturer: {
			type: GraphQLString,
			description: 'A name of the manufacturer.',
		},
		_manufactureDate: {
			type: require('./element.input.js'),
			description: 'The date and time when the device was manufactured.',
		},
		manufactureDate: {
			type: DateTimeScalar,
			description: 'The date and time when the device was manufactured.',
		},
		_expirationDate: {
			type: require('./element.input.js'),
			description:
				'The date and time beyond which this device is no longer valid or should not be used (if applicable).',
		},
		expirationDate: {
			type: DateTimeScalar,
			description:
				'The date and time beyond which this device is no longer valid or should not be used (if applicable).',
		},
		_model: {
			type: require('./element.input.js'),
			description:
				"The 'model' is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.",
		},
		model: {
			type: GraphQLString,
			description:
				"The 'model' is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.",
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.',
		},
		version: {
			type: GraphQLString,
			description:
				'The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.',
		},
		patient: {
			type: GraphQLString,
			description: 'Patient information, If the device is affixed to a person.',
		},
		owner: {
			type: GraphQLString,
			description:
				'An organization that is responsible for the provision and ongoing maintenance of the device.',
		},
		contact: {
			type: new GraphQLList(require('./contactpoint.input.js')),
			description:
				'Contact details for an organization or a particular human that is responsible for the device.',
		},
		location: {
			type: GraphQLString,
			description: 'The place where the device can be found.',
		},
		_url: {
			type: require('./element.input.js'),
			description:
				'A network address on which the device may be contacted directly.',
		},
		url: {
			type: UriScalar,
			description:
				'A network address on which the device may be contacted directly.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Descriptive information, usage information or implantation information that is not captured in an existing element.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/device-safety
		safety: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Provides additional safety characteristics about a medical device.  For example devices containing latex.',
		},
	}),
});
