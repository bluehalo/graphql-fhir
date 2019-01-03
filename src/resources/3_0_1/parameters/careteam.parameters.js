const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the careteam query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'Time period team covers (See http://hl7.org/fhir/SearchParameter/clinical-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'External Ids for this team (See http://hl7.org/fhir/SearchParameter/clinical-identifier).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who care team is for (See http://hl7.org/fhir/SearchParameter/clinical-patient).',
	},
	subject: {
		type: GraphQLString,
		description:
			'Who care team is for (See http://hl7.org/fhir/SearchParameter/CareTeam-subject).',
	},
	context: {
		type: GraphQLString,
		description:
			'Encounter or episode associated with CareTeam (See http://hl7.org/fhir/SearchParameter/CareTeam-context).',
	},
	encounter: {
		type: GraphQLString,
		description:
			'Encounter or episode associated with CareTeam (See http://hl7.org/fhir/SearchParameter/CareTeam-encounter).',
	},
	category: {
		type: TokenScalar,
		description:
			'Type of team (See http://hl7.org/fhir/SearchParameter/CareTeam-category).',
	},
	participant: {
		type: GraphQLString,
		description:
			'Who is involved (See http://hl7.org/fhir/SearchParameter/CareTeam-participant).',
	},
	status: {
		type: TokenScalar,
		description:
			'proposed | active | suspended | inactive | entered-in-error (See http://hl7.org/fhir/SearchParameter/CareTeam-status).',
	},
};
