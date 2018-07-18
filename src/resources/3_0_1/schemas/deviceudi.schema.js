const UriScalar = require('../scalars/uri.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DeviceUdi Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceUdi',
	description: '[Unique device identifier (UDI)](device.html#5.11.3.2.2) assigned to device label or package.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		deviceIdentifier: {
			type: GraphQLString,
			description: 'The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.'
		},
		_deviceIdentifier: {
			type: require('./element.schema'),
			description: 'The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.'
		},
		name: {
			type: GraphQLString,
			description: 'Name of device as used in labeling or catalog.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Name of device as used in labeling or catalog.'
		},
		jurisdiction: {
			type: UriScalar,
			description: 'The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace. with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.'
		},
		_jurisdiction: {
			type: require('./element.schema'),
			description: 'The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace. with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.'
		},
		carrierHRF: {
			type: GraphQLString,
			description: 'The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device.'
		},
		_carrierHRF: {
			type: require('./element.schema'),
			description: 'The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device.'
		},
		carrierAIDC: {
			type: Base64BinaryScalar,
			description: 'The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - E.g a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.'
		},
		_carrierAIDC: {
			type: require('./element.schema'),
			description: 'The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - E.g a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.'
		},
		issuer: {
			type: UriScalar,
			description: 'Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include : 1) GS1:  http://hl7.org/fhir/NamingSystem/gs1-di,  2) HIBCC: http://hl7.org/fhir/NamingSystem/hibcc-dI,  3) ICCBBA for blood containers: http://hl7.org/fhir/NamingSystem/iccbba-blood-di,  4) ICCBA for other devices: http://hl7.org/fhir/NamingSystem/iccbba-other-di.'
		},
		_issuer: {
			type: require('./element.schema'),
			description: 'Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include : 1) GS1:  http://hl7.org/fhir/NamingSystem/gs1-di,  2) HIBCC: http://hl7.org/fhir/NamingSystem/hibcc-dI,  3) ICCBBA for blood containers: http://hl7.org/fhir/NamingSystem/iccbba-blood-di,  4) ICCBA for other devices: http://hl7.org/fhir/NamingSystem/iccbba-other-di.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/udi-entry-type
		entryType: {
			type: CodeScalar,
			description: 'A coded entry to indicate how the data was entered.'
		},
		_entryType: {
			type: require('./element.schema'),
			description: 'A coded entry to indicate how the data was entered.'
		}
	})
});
