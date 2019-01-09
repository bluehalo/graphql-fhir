const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the practitionerrole query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/individual-email
	email: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "PractitionerRole.telecom[system/@value='email']",
		description:
			'Multiple Resources:     * [Patient](patient.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-phone
	phone: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "PractitionerRole.telecom[system/@value='phone']",
		description:
			'Multiple Resources:     * [Patient](patient.html): A value in a phone contact  * [Person](person.html): A value in a phone contact  * [Practitioner](practitioner.html): A value in a phone contact  * [PractitionerRole](practitionerrole.html): A value in a phone contact  * [RelatedPerson](relatedperson.html): A value in a phone contact  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PractitionerRole.telecom',
		description:
			'Multiple Resources:     * [Patient](patient.html): The value in any kind of telecom details of the patient  * [Person](person.html): The value in any kind of contact  * [Practitioner](practitioner.html): The value in any kind of contact  * [PractitionerRole](practitionerrole.html): The value in any kind of contact  * [RelatedPerson](relatedperson.html): The value in any kind of contact  ',
	},
	// http://hl7.org/fhir/SearchParameter/PractitionerRole-active
	active: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PractitionerRole.active',
		description: 'Whether this practitioner role record is in active use',
	},
	// http://hl7.org/fhir/SearchParameter/PractitionerRole-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'PractitionerRole.period',
		description:
			'The period during which the practitioner is authorized to perform in these role(s)',
	},
	// http://hl7.org/fhir/SearchParameter/PractitionerRole-endpoint
	endpoint: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PractitionerRole.endpoint',
		description:
			'Technical endpoints providing access to services operated for the practitioner with this role',
	},
	// http://hl7.org/fhir/SearchParameter/PractitionerRole-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PractitionerRole.identifier',
		description: "A practitioner's Identifier",
	},
	// http://hl7.org/fhir/SearchParameter/PractitionerRole-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PractitionerRole.location',
		description:
			'One of the locations at which this practitioner provides care',
	},
	// http://hl7.org/fhir/SearchParameter/PractitionerRole-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PractitionerRole.organization',
		description:
			'The identity of the organization the practitioner represents / acts on behalf of',
	},
	// http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner
	practitioner: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PractitionerRole.practitioner',
		description:
			'Practitioner that is able to provide the defined services for the organization',
	},
	// http://hl7.org/fhir/SearchParameter/PractitionerRole-role
	role: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PractitionerRole.code',
		description:
			'The practitioner can perform this role at for the organization',
	},
	// http://hl7.org/fhir/SearchParameter/PractitionerRole-service
	service: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PractitionerRole.healthcareService',
		description:
			"The list of healthcare services that this worker provides for this role's Organization/Location(s)",
	},
	// http://hl7.org/fhir/SearchParameter/PractitionerRole-specialty
	specialty: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PractitionerRole.specialty',
		description: 'The practitioner has this specialty at an organization',
	},
};
