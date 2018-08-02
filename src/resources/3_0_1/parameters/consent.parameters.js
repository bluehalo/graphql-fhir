const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the consent query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'When this Consent was created or indexed. See http://hl7.org/fhir/SearchParameter/clinical-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Identifier for this record (external references). See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	securitylabel: {
		type: TokenScalar,
		description: 'Security Labels that define affected resources. See http://hl7.org/fhir/SearchParameter/Consent-securitylabel.'
	},
	period: {
		type: DateScalar,
		description: 'Period that this consent applies. See http://hl7.org/fhir/SearchParameter/Consent-period.'
	},
	data: {
		type: GraphQLString,
		description: 'The actual data reference. See http://hl7.org/fhir/SearchParameter/Consent-data.'
	},
	purpose: {
		type: TokenScalar,
		description: 'Context of activities for which the agreement is made. See http://hl7.org/fhir/SearchParameter/Consent-purpose.'
	},
	source: {
		type: GraphQLString,
		description: 'Source from which this consent is taken. See http://hl7.org/fhir/SearchParameter/Consent-source.'
	},
	actor: {
		type: GraphQLString,
		description: 'Resource for the actor (or group, by role). See http://hl7.org/fhir/SearchParameter/Consent-actor.'
	},
	patient: {
		type: GraphQLString,
		description: 'Who the consent applies to. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	organization: {
		type: GraphQLString,
		description: 'Custodian of the consent. See http://hl7.org/fhir/SearchParameter/Consent-organization.'
	},
	action: {
		type: TokenScalar,
		description: 'Actions controlled by this consent. See http://hl7.org/fhir/SearchParameter/Consent-action.'
	},
	consentor: {
		type: GraphQLString,
		description: 'Who is agreeing to the policy and exceptions. See http://hl7.org/fhir/SearchParameter/Consent-consentor.'
	},
	category: {
		type: TokenScalar,
		description: 'Classification of the consent statement - for indexing/retrieval. See http://hl7.org/fhir/SearchParameter/Consent-category.'
	},
	status: {
		type: TokenScalar,
		description: 'draft | proposed | active | rejected | inactive | entered-in-error. See http://hl7.org/fhir/SearchParameter/Consent-status.'
	}
};
