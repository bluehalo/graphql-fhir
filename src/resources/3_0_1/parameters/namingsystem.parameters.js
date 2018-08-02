const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the namingsystem query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The naming system publication date. See http://hl7.org/fhir/SearchParameter/NamingSystem-date.'
	},
	period: {
		type: DateScalar,
		description: 'When is identifier valid?. See http://hl7.org/fhir/SearchParameter/NamingSystem-period.'
	},
	kind: {
		type: TokenScalar,
		description: 'codesystem | identifier | root. See http://hl7.org/fhir/SearchParameter/NamingSystem-kind.'
	},
	jurisdiction: {
		type: TokenScalar,
		description: 'Intended jurisdiction for the naming system. See http://hl7.org/fhir/SearchParameter/NamingSystem-jurisdiction.'
	},
	description: {
		type: GraphQLString,
		description: 'The description of the naming system. See http://hl7.org/fhir/SearchParameter/NamingSystem-description.'
	},
	type: {
		type: TokenScalar,
		description: 'e.g. driver,  provider,  patient, bank etc. See http://hl7.org/fhir/SearchParameter/NamingSystem-type.'
	},
	id_type: {
		type: TokenScalar,
		description: 'oid | uuid | uri | other. See http://hl7.org/fhir/SearchParameter/NamingSystem-id-type.'
	},
	responsible: {
		type: GraphQLString,
		description: 'Who maintains system namespace?. See http://hl7.org/fhir/SearchParameter/NamingSystem-responsible.'
	},
	contact: {
		type: GraphQLString,
		description: 'Name of an individual to contact. See http://hl7.org/fhir/SearchParameter/NamingSystem-contact.'
	},
	name: {
		type: GraphQLString,
		description: 'Computationally friendly name of the naming system. See http://hl7.org/fhir/SearchParameter/NamingSystem-name.'
	},
	publisher: {
		type: GraphQLString,
		description: 'Name of the publisher of the naming system. See http://hl7.org/fhir/SearchParameter/NamingSystem-publisher.'
	},
	telecom: {
		type: TokenScalar,
		description: 'Contact details for individual or organization. See http://hl7.org/fhir/SearchParameter/NamingSystem-telecom.'
	},
	value: {
		type: GraphQLString,
		description: 'The unique identifier. See http://hl7.org/fhir/SearchParameter/NamingSystem-value.'
	},
	replaced_by: {
		type: GraphQLString,
		description: 'Use this instead. See http://hl7.org/fhir/SearchParameter/NamingSystem-replaced-by.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the naming system. See http://hl7.org/fhir/SearchParameter/NamingSystem-status.'
	}
};
