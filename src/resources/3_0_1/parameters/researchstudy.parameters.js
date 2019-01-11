const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the researchstudy query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchStudy.category',
		description: 'Classifications for the study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ResearchStudy.period',
		description: 'When the study began and ended',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-focus
	focus: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchStudy.focus',
		description: 'Drugs, devices, conditions, etc. under study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchStudy.identifier',
		description: 'Business Identifier for study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchStudy.jurisdiction',
		description: 'Geographic region(s) for study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-keyword
	keyword: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchStudy.keyword',
		description: 'Used to search for the study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-partof
	partof: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ResearchStudy.partOf',
		description: 'Part of larger study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-principalinvestigator
	principalinvestigator: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ResearchStudy.principalInvestigator',
		description: 'The individual responsible for the study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-protocol
	protocol: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ResearchStudy.protocol',
		description: 'Steps followed in executing study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-site
	site: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ResearchStudy.site',
		description: 'Location involved in study execution',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-sponsor
	sponsor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ResearchStudy.sponsor',
		description: 'Organization responsible for the study',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ResearchStudy.status',
		description:
			'draft | in-progress | suspended | stopped | completed | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/ResearchStudy-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ResearchStudy.title',
		description: 'Name for this study',
	},
};
