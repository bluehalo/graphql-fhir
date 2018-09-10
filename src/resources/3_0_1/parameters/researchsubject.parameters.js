const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the researchsubject query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'Start and end of participation (See http://hl7.org/fhir/SearchParameter/ResearchSubject-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Business Identifier for research subject (See http://hl7.org/fhir/SearchParameter/ResearchSubject-identifier).'
	},
	individual: {
		type: GraphQLString,
		description: 'Who is part of study (See http://hl7.org/fhir/SearchParameter/ResearchSubject-individual).'
	},
	patient: {
		type: GraphQLString,
		description: 'Who is part of study (See http://hl7.org/fhir/SearchParameter/ResearchSubject-patient).'
	},
	status: {
		type: TokenScalar,
		description: 'candidate | enrolled | active | suspended | withdrawn | completed (See http://hl7.org/fhir/SearchParameter/ResearchSubject-status).'
	}
};
