const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the namingsystem query
 */
module.exports = {
	responsible: {
		type: GraphQLString,
		description: 'Who maintains system namespace?. See http://hl7.org/fhir/SearchParameter/namingsystem-responsible.'
	},
	status: {
		type: TokenScalar,
		description: 'draft | active | retired. See http://hl7.org/fhir/SearchParameter/namingsystem-status.'
	},
	type: {
		type: TokenScalar,
		description: 'e.g. driver,  provider,  patient, bank etc. See http://hl7.org/fhir/SearchParameter/namingsystem-type.'
	},
	date: {
		type: DateScalar,
		description: 'Publication Date(/time). See http://hl7.org/fhir/SearchParameter/namingsystem-date.'
	},
	period: {
		type: DateScalar,
		description: 'When is identifier valid?. See http://hl7.org/fhir/SearchParameter/namingsystem-period.'
	},
	contact: {
		type: GraphQLString,
		description: 'Name of a individual to contact. See http://hl7.org/fhir/SearchParameter/namingsystem-contact.'
	},
	kind: {
		type: TokenScalar,
		description: 'codesystem | identifier | root. See http://hl7.org/fhir/SearchParameter/namingsystem-kind.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher (Organization or individual). See http://hl7.org/fhir/SearchParameter/namingsystem-publisher.'
	},
	id_type: {
		type: TokenScalar,
		description: 'oid | uuid | uri | other. See http://hl7.org/fhir/SearchParameter/namingsystem-id-type.'
	},
	name: {
		type: GraphQLString,
		description: 'Human-readable label. See http://hl7.org/fhir/SearchParameter/namingsystem-name.'
	},
	context: {
		type: TokenScalar,
		description: 'Content intends to support these contexts. See http://hl7.org/fhir/SearchParameter/namingsystem-context.'
	},
	value: {
		type: GraphQLString,
		description: 'The unique identifier. See http://hl7.org/fhir/SearchParameter/namingsystem-value.'
	},
	telecom: {
		type: TokenScalar,
		description: 'Contact details for individual or publisher. See http://hl7.org/fhir/SearchParameter/namingsystem-telecom.'
	},
	replaced_by: {
		type: GraphQLString,
		description: 'Use this instead. See http://hl7.org/fhir/SearchParameter/namingsystem-replaced-by.'
	}
};
