const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the specimen query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Specimen-accession
	accession: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Specimen.accessionIdentifier',
		description: 'The accession number associated with the specimen',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-bodysite
	bodysite: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Specimen.collection.bodySite',
		description:
			'The code for the body site from where the specimen originated',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-collected
	collected: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Specimen.collection.collectedDateTime',
		description: 'The date the specimen was collected',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-collector
	collector: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Specimen.collection.collector',
		description: 'Who collected the specimen',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-container
	container: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Specimen.container.type',
		description: 'The kind of specimen container',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-container-id
	container_id: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Specimen.container.identifier',
		description: 'The unique identifier associated with the specimen container',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Specimen.identifier',
		description: 'The unique identifier associated with the specimen',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-parent
	parent: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Specimen.parent',
		description: 'The parent of the specimen',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Specimen.subject',
		description: 'The patient the specimen comes from',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Specimen.status',
		description: 'available | unavailable | unsatisfactory | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Specimen.subject',
		description: 'The subject of the specimen',
	},
	// http://hl7.org/fhir/SearchParameter/Specimen-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Specimen.type',
		description: 'The specimen type',
	},
};
