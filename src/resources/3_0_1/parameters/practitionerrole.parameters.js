const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the practitionerrole query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The period during which the practitioner is authorized to perform in these role(s). See http://hl7.org/fhir/SearchParameter/PractitionerRole-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'A practitioner\'s Identifier. See http://hl7.org/fhir/SearchParameter/PractitionerRole-identifier.'
	},
	specialty: {
		type: TokenScalar,
		description: 'The practitioner has this specialty at an organization. See http://hl7.org/fhir/SearchParameter/PractitionerRole-specialty.'
	},
	role: {
		type: TokenScalar,
		description: 'The practitioner can perform this role at for the organization. See http://hl7.org/fhir/SearchParameter/PractitionerRole-role.'
	},
	practitioner: {
		type: GraphQLString,
		description: 'Practitioner that is able to provide the defined services for the organation. See http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner.'
	},
	active: {
		type: TokenScalar,
		description: 'Whether this practitioner\'s record is in active use. See http://hl7.org/fhir/SearchParameter/PractitionerRole-active.'
	},
	endpoint: {
		type: GraphQLString,
		description: 'Technical endpoints providing access to services operated for the practitioner with this role. See http://hl7.org/fhir/SearchParameter/PractitionerRole-endpoint.'
	},
	phone: {
		type: TokenScalar,
		description: 'A value in a phone contact. See http://hl7.org/fhir/SearchParameter/individual-phone.'
	},
	service: {
		type: GraphQLString,
		description: 'The list of healthcare services that this worker provides for this role\'s Organization/Location(s). See http://hl7.org/fhir/SearchParameter/PractitionerRole-service.'
	},
	organization: {
		type: GraphQLString,
		description: 'The identity of the organization the practitioner represents / acts on behalf of. See http://hl7.org/fhir/SearchParameter/PractitionerRole-organization.'
	},
	telecom: {
		type: TokenScalar,
		description: 'The value in any kind of contact. See http://hl7.org/fhir/SearchParameter/individual-telecom.'
	},
	location: {
		type: GraphQLString,
		description: 'One of the locations at which this practitioner provides care. See http://hl7.org/fhir/SearchParameter/PractitionerRole-location.'
	},
	email: {
		type: TokenScalar,
		description: 'A value in an email contact. See http://hl7.org/fhir/SearchParameter/individual-email.'
	}
};
