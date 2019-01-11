const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the patient query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Patient-active
	active: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.active',
		description: 'Whether the patient record is active',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address
	address: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.address',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Practitioner](practitioner.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Person](person.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Patient](patient.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address-city
	address_city: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.address.city',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A city specified in an address  * [Practitioner](practitioner.html): A city specified in an address  * [Person](person.html): A city specified in an address  * [Patient](patient.html): A city specified in an address  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address-country
	address_country: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.address.country',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A country specified in an address  * [Practitioner](practitioner.html): A country specified in an address  * [Person](person.html): A country specified in an address  * [Patient](patient.html): A country specified in an address  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address-postalcode
	address_postalcode: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.address.postalCode',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A postal code specified in an address  * [Practitioner](practitioner.html): A postalCode specified in an address  * [Person](person.html): A postal code specified in an address  * [Patient](patient.html): A postalCode specified in an address  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address-state
	address_state: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.address.state',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A state specified in an address  * [Practitioner](practitioner.html): A state specified in an address  * [Person](person.html): A state specified in an address  * [Patient](patient.html): A state specified in an address  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-address-use
	address_use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.address.use',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A use code specified in an address  * [Practitioner](practitioner.html): A use code specified in an address  * [Person](person.html): A use code specified in an address  * [Patient](patient.html): A use code specified in an address  ',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-animal-breed
	animal_breed: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.animal.breed',
		description: 'The breed for animal patients',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-animal-species
	animal_species: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.animal.species',
		description: 'The species for animal patients',
	},
	// http://hl7.org/fhir/SearchParameter/individual-birthdate
	birthdate: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Patient.birthDate',
		description:
			"Multiple Resources:     * [RelatedPerson](relatedperson.html): The Related Person's date of birth  * [Person](person.html): The person's date of birth  * [Patient](patient.html): The patient's date of birth  ",
	},
	// http://hl7.org/fhir/SearchParameter/Patient-death-date
	death_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Patient.deceasedDateTime',
		description:
			'The date of death has been provided and satisfies this search value',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-deceased
	deceased: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.deceasedBoolean',
		description:
			'This patient has been marked as deceased, or as a death date entered',
	},
	// http://hl7.org/fhir/SearchParameter/individual-email
	email: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "Patient.telecom[system/@value='email']",
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Patient](patient.html): A value in an email contact  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-family
	family: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.name.family',
		description:
			'Multiple Resources:     * [Practitioner](practitioner.html): A portion of the family name  * [Patient](patient.html): A portion of the family name of the patient  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-gender
	gender: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.gender',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): Gender of the related person  * [Practitioner](practitioner.html): Gender of the practitioner  * [Person](person.html): The gender of the person  * [Patient](patient.html): Gender of the patient  ',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-general-practitioner
	general_practitioner: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Patient.generalPractitioner',
		description:
			"Patient's nominated general practitioner, not the organization that manages the record",
	},
	// http://hl7.org/fhir/SearchParameter/individual-given
	given: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.name.given',
		description:
			'Multiple Resources:     * [Practitioner](practitioner.html): A portion of the given name  * [Patient](patient.html): A portion of the given name of the patient  ',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.identifier',
		description: 'A patient identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-language
	language: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.communication.language',
		description: 'Language code (irrespective of use value)',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-link
	link: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Patient.link.other',
		description: 'All patients linked to the given patient',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.name',
		description:
			'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Patient.managingOrganization',
		description: 'The organization at which this person is a patient',
	},
	// http://hl7.org/fhir/SearchParameter/individual-phone
	phone: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "Patient.telecom[system/@value='phone']",
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in a phone contact  * [RelatedPerson](relatedperson.html): A value in a phone contact  * [Practitioner](practitioner.html): A value in a phone contact  * [Person](person.html): A value in a phone contact  * [Patient](patient.html): A value in a phone contact  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-phonetic
	phonetic: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.name',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A portion of name using some kind of phonetic matching algorithm  * [Practitioner](practitioner.html): A portion of either family or given name using some kind of phonetic matching algorithm  * [Person](person.html): A portion of name using some kind of phonetic matching algorithm  * [Patient](patient.html): A portion of either family or given name using some kind of phonetic matching algorithm  ',
	},
	// http://hl7.org/fhir/SearchParameter/individual-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.telecom',
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): The value in any kind of contact  * [RelatedPerson](relatedperson.html): The value in any kind of contact  * [Practitioner](practitioner.html): The value in any kind of contact  * [Person](person.html): The value in any kind of contact  * [Patient](patient.html): The value in any kind of telecom details of the patient  ',
	},
};
