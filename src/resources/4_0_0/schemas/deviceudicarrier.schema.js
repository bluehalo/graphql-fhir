const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary DeviceudiCarrier Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceudiCarrier',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_deviceIdentifier: {
			type: require('./element.schema.js'),
			description:
				'The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.',
		},
		deviceIdentifier: {
			type: GraphQLString,
			description:
				'The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.',
		},
		_issuer: {
			type: require('./element.schema.js'),
			description:
				'Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include : 1) GS1:  http://hl7.org/fhir/NamingSystem/gs1-di,  2) HIBCC: http://hl7.org/fhir/NamingSystem/hibcc-dI,  3) ICCBBA for blood containers: http://hl7.org/fhir/NamingSystem/iccbba-blood-di,  4) ICCBA for other devices: http://hl7.org/fhir/NamingSystem/iccbba-other-di.',
		},
		issuer: {
			type: UriScalar,
			description:
				'Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include : 1) GS1:  http://hl7.org/fhir/NamingSystem/gs1-di,  2) HIBCC: http://hl7.org/fhir/NamingSystem/hibcc-dI,  3) ICCBBA for blood containers: http://hl7.org/fhir/NamingSystem/iccbba-blood-di,  4) ICCBA for other devices: http://hl7.org/fhir/NamingSystem/iccbba-other-di.',
		},
		_jurisdiction: {
			type: require('./element.schema.js'),
			description:
				'The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.',
		},
		jurisdiction: {
			type: UriScalar,
			description:
				'The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.',
		},
		_carrierAIDC: {
			type: require('./element.schema.js'),
			description:
				'The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - e.g., a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.',
		},
		carrierAIDC: {
			type: Base64BinaryScalar,
			description:
				'The full UDI carrier of the Automatic Identification and Data Capture (AIDC) technology representation of the barcode string as printed on the packaging of the device - e.g., a barcode or RFID.   Because of limitations on character sets in XML and the need to round-trip JSON data through XML, AIDC Formats *SHALL* be base64 encoded.',
		},
		_carrierHRF: {
			type: require('./element.schema.js'),
			description:
				'The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device.',
		},
		carrierHRF: {
			type: GraphQLString,
			description:
				'The full UDI carrier as the human readable form (HRF) representation of the barcode string as printed on the packaging of the device.',
		},
		_entryType: {
			type: require('./element.schema.js'),
			description: 'A coded entry to indicate how the data was entered.',
		},
		entryType: {
			type: CodeScalar,
			description: 'A coded entry to indicate how the data was entered.',
		},
	}),
});
