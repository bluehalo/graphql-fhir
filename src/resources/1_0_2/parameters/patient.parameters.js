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
	// http://hl7.org/fhir/SearchParameter/Patient-address
	address: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.address',
		description: 'An address in any kind of address/part of the patient',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-address-city
	address_city: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.address.city',
		description: 'A city specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-address-country
	address_country: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.address.country',
		description: 'A country specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-address-postalcode
	address_postalcode: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.address.postalCode',
		description: 'A postalCode specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-address-state
	address_state: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.address.state',
		description: 'A state specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-address-use
	address_use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.address.use',
		description: 'A use code specified in an address',
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
	// http://hl7.org/fhir/SearchParameter/Patient-birthdate
	birthdate: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Patient.birthDate',
		description: "The patient's date of birth",
	},
	// http://hl7.org/fhir/SearchParameter/Patient-careprovider
	careprovider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Patient.careProvider',
		description:
			"Patient's nominated care provider, could be a care manager, not the organization that manages the record",
	},
	// http://hl7.org/fhir/SearchParameter/Patient-deathdate
	deathdate: {
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
	// http://hl7.org/fhir/SearchParameter/Patient-email
	email: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "Patient.telecom[system/@value='email']",
		description: 'A value in an email contact',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-family
	family: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.name.family',
		description: 'A portion of the family name of the patient',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-gender
	gender: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.gender',
		description: 'Gender of the patient',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-given
	given: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.name.given',
		description: 'A portion of the given name of the patient',
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
		description: 'A portion of either family or given name of the patient',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Patient.managingOrganization',
		description: 'The organization at which this person is a patient',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-phone
	phone: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "Patient.telecom[system/@value='phone']",
		description: 'A value in a phone contact',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-phonetic
	phonetic: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Patient.name',
		description:
			'A portion of either family or given name using some kind of phonetic matching algorithm',
	},
	// http://hl7.org/fhir/SearchParameter/Patient-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Patient.telecom',
		description: 'The value in any kind of telecom details of the patient',
	},
	// http://hl7.org/fhir/SearchParameter/us-core-Patient-race
	race: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath:
			"Patient.extension[@url='http://hl7.org/fhir/StructureDefinition/us-core-race']",
		description:
			'Returns patients with a race extension matching the specified code.',
	},
	// http://hl7.org/fhir/SearchParameter/us-core-Patient-ethnicity
	ethnicity: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath:
			"Patient.extension[@url='http://hl7.org/fhir/StructureDefinition/us-core-ethnicity']",
		description:
			'Returns patients with an ethnicity extension matching the specified code.',
	},
};
