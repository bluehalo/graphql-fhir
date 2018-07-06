const { resolve } = require('../../../../utils/resolve.utils');
const errorUtils = require(resolve('utils/error.utils'));

// TODO: Remove dummy patient and write queries and connections
// to your database, if you need to add a database connection to
// context, you can attach it to the server instance or add it
// in the setupGraphqlServer function in src/utils/router.utils

// Dummy Patient to use for mocking these queries
let dummmy_patient = {
	'resourceType': 'Patient',
	'id': '1',
	'meta': {
		'versionId': '2.0'
	},
	'text': {
		'status': 'generated',
		'div': 'Doe JOHN\nIdentifier 211 - 778 - 2345\nAddress 425 West Side dr\nApt #101\nGaithersburg MD US\nDate of birth\n01 January 1980'
	},
	'extension': [{
		'url': 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName',
		'valueString': 'Jane'
	}, {
		'url': 'http://hl7.org/fhir/StructureDefinition/birthPlace',
		'valueAddress': {
			'use': 'home',
			'line': [
				'2110 Silverspring Rd',
				'Block # 2 '
			],
			'city': 'New York',
			'state': 'NY',
			'postalCode': '07882',
			'country': 'US'
		}
	}, {
		'url': 'http://hl7.org/fhir/StructureDefinition/us-core-ethnicity',
		'valueCodeableConcept': {
			'coding': [{
				'system': 'http://hl7.org/fhir/v3/Ethnicity',
				'code': '2135-2',
				'display': 'Hispanic or Latino'
			}]
		}
	}]
};

/**
 * @name exports.patientResolver
 * @static
 * @summary Patient Resolver.
 */
module.exports.patientResolver = function patientResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	server.logger.info('Patient Resolver');
	return dummmy_patient;
};

/**
 * @name exports.patientListResolver
 * @static
 * @summary Patient List Resolver.
 */
module.exports.patientListResolver = function patientListResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	server.logger.info('PatientList Resolver');
	return [ dummmy_patient ];
};

/**
 * @name exports.patientInstanceResolver
 * @static
 * @summary Patient Instance Resolver.
 */
module.exports.patientInstanceResolver = function patientInstanceResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	server.logger.info('PatientInstance Resolver');
	return dummmy_patient;
};

/**
 * @name exports.patientCreateResolver
 * @static
 * @summary Patient Create Resolver.
 */
module.exports.patientCreateResolver = function patientCreateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	server.logger.info('PatientCreate Resolver');
	return dummmy_patient;
};

/**
 * @name exports.patientUpdateResolver
 * @static
 * @summary Patient Update Resolver.
 */
module.exports.patientUpdateResolver = function patientUpdateResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	server.logger.info('PatientUpdate Resolver');
	return dummmy_patient;
};

/**
 * @name exports.patientDeleteResolver
 * @static
 * @summary Patient Delete Resolver.
 */
module.exports.patientDeleteResolver = function patientDeleteResolver (root, args, context, info) {
	let { server, req, res, version } = context;
	server.logger.info('PatientDelete Resolver');
	return dummmy_patient;
};
