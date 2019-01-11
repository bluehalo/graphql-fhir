const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the device query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Device-device-name
	device_name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Device.deviceName',
		description:
			'A server defined search that may match any of the string fields in Device.deviceName or Device.type.',
	},
	// http://hl7.org/fhir/SearchParameter/Device-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Device.identifier',
		description: 'Instance id from manufacturer, owner, and others',
	},
	// http://hl7.org/fhir/SearchParameter/Device-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Device.location',
		description: 'A location, where the resource is found',
	},
	// http://hl7.org/fhir/SearchParameter/Device-manufacturer
	manufacturer: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Device.manufacturer',
		description: 'The manufacturer of the device',
	},
	// http://hl7.org/fhir/SearchParameter/Device-model
	model: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Device.modelNumber',
		description: 'The model of the device',
	},
	// http://hl7.org/fhir/SearchParameter/Device-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Device.owner',
		description: 'The organization responsible for the device',
	},
	// http://hl7.org/fhir/SearchParameter/Device-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Device.patient',
		description: 'Patient information, if the resource is affixed to a person',
	},
	// http://hl7.org/fhir/SearchParameter/Device-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Device.status',
		description: 'active | inactive | entered-in-error | unknown',
	},
	// http://hl7.org/fhir/SearchParameter/Device-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Device.type',
		description: 'The type of the device',
	},
	// http://hl7.org/fhir/SearchParameter/Device-udi-carrier
	udi_carrier: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Device.udiCarrier',
		description:
			'UDI Barcode (RFID or other technology) string in *HRF* format.',
	},
	// http://hl7.org/fhir/SearchParameter/Device-udi-di
	udi_di: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Device.udiCarrier',
		description: 'The udi Device Identifier (DI)',
	},
	// http://hl7.org/fhir/SearchParameter/Device-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Device.url',
		description: 'Network address to contact device',
	},
};
