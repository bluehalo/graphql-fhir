const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the specimen query
 */
module.exports = {
	container: {
		type: TokenScalar,
		description:
			'The kind of specimen container (See http://hl7.org/fhir/SearchParameter/Specimen-container).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'The unique identifier associated with the specimen (See http://hl7.org/fhir/SearchParameter/Specimen-identifier).',
	},
	parent: {
		type: GraphQLString,
		description:
			'The parent of the specimen (See http://hl7.org/fhir/SearchParameter/Specimen-parent).',
	},
	container_id: {
		type: TokenScalar,
		description:
			'The unique identifier associated with the specimen container (See http://hl7.org/fhir/SearchParameter/Specimen-container-id).',
	},
	bodysite: {
		type: TokenScalar,
		description:
			'The code for the body site from where the specimen originated (See http://hl7.org/fhir/SearchParameter/Specimen-bodysite).',
	},
	subject: {
		type: GraphQLString,
		description:
			'The subject of the specimen (See http://hl7.org/fhir/SearchParameter/Specimen-subject).',
	},
	patient: {
		type: GraphQLString,
		description:
			'The patient the specimen comes from (See http://hl7.org/fhir/SearchParameter/Specimen-patient).',
	},
	collected: {
		type: DateScalar,
		description:
			'The date the specimen was collected (See http://hl7.org/fhir/SearchParameter/Specimen-collected).',
	},
	accession: {
		type: TokenScalar,
		description:
			'The accession number associated with the specimen (See http://hl7.org/fhir/SearchParameter/Specimen-accession).',
	},
	type: {
		type: TokenScalar,
		description:
			'The specimen type (See http://hl7.org/fhir/SearchParameter/Specimen-type).',
	},
	collector: {
		type: GraphQLString,
		description:
			'Who collected the specimen (See http://hl7.org/fhir/SearchParameter/Specimen-collector).',
	},
	status: {
		type: TokenScalar,
		description:
			'available | unavailable | unsatisfactory | entered-in-error (See http://hl7.org/fhir/SearchParameter/Specimen-status).',
	},
};
