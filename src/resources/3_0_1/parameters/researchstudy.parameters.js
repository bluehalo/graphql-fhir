const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the researchstudy query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'When the study began and ended (See http://hl7.org/fhir/SearchParameter/ResearchStudy-date).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Business Identifier for study (See http://hl7.org/fhir/SearchParameter/ResearchStudy-identifier).'
	},
	partof: {
		type: GraphQLString,
		description: 'Part of larger study (See http://hl7.org/fhir/SearchParameter/ResearchStudy-partof).'
	},
	sponsor: {
		type: GraphQLString,
		description: 'Organization responsible for the study (See http://hl7.org/fhir/SearchParameter/ResearchStudy-sponsor).'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Geographic region(s) for study (See http://hl7.org/fhir/SearchParameter/ResearchStudy-jurisdiction).'
	},
	focus: {
		type: TokenScalar,
		description: 'Drugs, devices, conditions, etc. under study (See http://hl7.org/fhir/SearchParameter/ResearchStudy-focus).'
	},
	principalinvestigator: {
		type: GraphQLString,
		description: 'The individual responsible for the study (See http://hl7.org/fhir/SearchParameter/ResearchStudy-principalinvestigator).'
	},
	title: {
		type: GraphQLString,
		description: 'Name for this study (See http://hl7.org/fhir/SearchParameter/ResearchStudy-title).'
	},
	protocol: {
		type: GraphQLString,
		description: 'Steps followed in executing study (See http://hl7.org/fhir/SearchParameter/ResearchStudy-protocol).'
	},
	site: {
		type: GraphQLString,
		description: 'Location involved in study execution (See http://hl7.org/fhir/SearchParameter/ResearchStudy-site).'
	},
	category: {
		type: TokenScalar,
		description: 'Classifications for the study (See http://hl7.org/fhir/SearchParameter/ResearchStudy-category).'
	},
	keyword: {
		type: TokenScalar,
		description: 'Used to search for the study (See http://hl7.org/fhir/SearchParameter/ResearchStudy-keyword).'
	},
	status: {
		type: TokenScalar,
		description: 'draft | in-progress | suspended | stopped | completed | entered-in-error (See http://hl7.org/fhir/SearchParameter/ResearchStudy-status).'
	}
};
