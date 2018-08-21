const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the device query
 */
module.exports = {
	udi_di: {
		type: GraphQLString,
		description: 'The udi Device Identifier (DI). See http://hl7.org/fhir/SearchParameter/Device-udi-di.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Instance id from manufacturer, owner, and others. See http://hl7.org/fhir/SearchParameter/Device-identifier.'
	},
	udi_carrier: {
		type: GraphQLString,
		description: 'UDI Barcode (RFID or other technology) string either in HRF format or AIDC format converted to base64 string. See http://hl7.org/fhir/SearchParameter/Device-udi-carrier.'
	},
	device_name: {
		type: GraphQLString,
		description: 'A server defined search that may match any of the string fields in the Device.udi.name  or Device.type.coding.display or  Device.type.text. See http://hl7.org/fhir/SearchParameter/Device-device-name.'
	},
	patient: {
		type: GraphQLString,
		description: 'Patient information, if the resource is affixed to a person. See http://hl7.org/fhir/SearchParameter/Device-patient.'
	},
	organization: {
		type: GraphQLString,
		description: 'The organization responsible for the device. See http://hl7.org/fhir/SearchParameter/Device-organization.'
	},
	model: {
		type: GraphQLString,
		description: 'The model of the device. See http://hl7.org/fhir/SearchParameter/Device-model.'
	},
	location: {
		type: GraphQLString,
		description: 'A location, where the resource is found. See http://hl7.org/fhir/SearchParameter/Device-location.'
	},
	type: {
		type: TokenScalar,
		description: 'The type of the device. See http://hl7.org/fhir/SearchParameter/Device-type.'
	},
	url: {
		type: UriScalar,
		description: 'Network address to contact device. See http://hl7.org/fhir/SearchParameter/Device-url.'
	},
	manufacturer: {
		type: GraphQLString,
		description: 'The manufacturer of the device. See http://hl7.org/fhir/SearchParameter/Device-manufacturer.'
	},
	status: {
		type: TokenScalar,
		description: 'active | inactive | entered-in-error | unknown. See http://hl7.org/fhir/SearchParameter/Device-status.'
	}
};
