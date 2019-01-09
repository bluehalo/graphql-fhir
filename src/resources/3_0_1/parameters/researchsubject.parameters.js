const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the researchsubject query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ResearchSubject-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ResearchSubject.period',
		description: 'Start and end of participation',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchSubject-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchSubject.identifier',
		description: 'Business Identifier for research subject',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchSubject-individual
	individual: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ResearchSubject.individual',
		description: 'Who is part of study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchSubject-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ResearchSubject.individual',
		description: 'Who is part of study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchSubject-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchSubject.status',
		description:
			'candidate | enrolled | active | suspended | withdrawn | completed',
	},
};
