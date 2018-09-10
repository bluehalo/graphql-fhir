const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the specimen query
 */
module.exports = {
	collector: {
		type: GraphQLString,
		description: 'Who collected the specimen (See http://hl7.org/fhir/SearchParameter/specimen-collector).'
	},
	container_id: {
		type: TokenScalar,
		description: 'The unique identifier associated with the specimen container (See http://hl7.org/fhir/SearchParameter/specimen-container-id).'
	},
	patient: {
		type: GraphQLString,
		description: 'The patient the specimen comes from (See http://hl7.org/fhir/SearchParameter/specimen-patient).'
	},
	bodysite: {
		type: TokenScalar,
		description: 'The code for the body site from where the specimen originated (See http://hl7.org/fhir/SearchParameter/specimen-bodysite).'
	},
	container: {
		type: TokenScalar,
		description: 'The kind of specimen container (See http://hl7.org/fhir/SearchParameter/specimen-container).'
	},
	collected: {
		type: DateScalar,
		description: 'The date the specimen was collected (See http://hl7.org/fhir/SearchParameter/specimen-collected).'
	},
	subject: {
		type: GraphQLString,
		description: 'The subject of the specimen (See http://hl7.org/fhir/SearchParameter/specimen-subject).'
	},
	accession: {
		type: TokenScalar,
		description: 'The accession number associated with the specimen (See http://hl7.org/fhir/SearchParameter/specimen-accession).'
	},
	parent: {
		type: GraphQLString,
		description: 'The parent of the specimen (See http://hl7.org/fhir/SearchParameter/specimen-parent).'
	},
	type: {
		type: TokenScalar,
		description: 'The specimen type (See http://hl7.org/fhir/SearchParameter/specimen-type).'
	},
	identifier: {
		type: TokenScalar,
		description: 'The unique identifier associated with the specimen (See http://hl7.org/fhir/SearchParameter/specimen-identifier).'
	}
};
