const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLList,
	GraphQLInt
} = require('graphql');

// Scalars
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

// Enums
let PatientResourceType = new GraphQLEnumType({
	name: 'PatientResourceTypeInput',
	values: {
		Patient: { value: 'Patient' }
	}
});

let PatientGenderType = new GraphQLEnumType({
	name: 'PatientGenderTypeInput',
	values: {
		male: { value: 'male' },
		female: { value: 'female' },
		other: { value: 'other' },
		unknown: { value: 'unknown' }
	}
});

let PatientContactGenderType = new GraphQLEnumType({
	name: 'PatientContactGenderTypeInput',
	values: {
		male: { value: 'male' },
		female: { value: 'female' },
		other: { value: 'other' },
		unknown: { value: 'unknown' }
	}
});

let PatientLinkTypeType = new GraphQLEnumType({
	name: 'PatientLinkTypeTypeInput',
	values: {
		replaced_by: { value: 'replaced_by' },
		replaces: { value: 'replaces' },
		refer: { value: 'refer' },
		seealso: { value: 'seealso' }
	}
});

let PatientBirthsexType = new GraphQLEnumType({
	name: 'PatientBirthsexTypeInput',
	values: {
		male: { value: 'male' },
		female: { value: 'female' },
		unknown: { value: 'unknown' }
	}
});

// Backbone Elements
let PatientContactInput = new GraphQLInputObjectType({
	name: 'PatientContactInput',
	description: 'A contact party (e.g. guardian, partner, friend) for the patient.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		relationship: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The nature of the relationship between the patient and the contact person.'
		},
		name: {
			type: require('./humanname.input'),
			description: 'A name associated with the contact person.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'A contact detail for the person, e.g. a telephone number or an email address.'
		},
		address: {
			type: require('./address.input'),
			description: 'Address for the contact person.'
		},
		gender: {
			type: PatientContactGenderType,
			description: 'Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.'
		},
		organization: {
			type: require('./reference.input'),
			description: 'Organization on behalf of which the contact is acting or for which the contact is working.'
		},
		period: {
			type: require('./period.input'),
			description: 'The period during which this contact person or organization is valid to be contacted relating to this patient.'
		}
	})
});

let PatientAnimalInput = new GraphQLInputObjectType({
	name: 'PatientAnimalInput',
	description: 'This patient is known to be an animal.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		species: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Identifies the high level taxonomic categorization of the kind of animal.'
		},
		breed: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Identifies the detailed categorization of the kind of animal.'
		},
		genderStatus: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Indicates the current state of the animal\'s reproductive organs.'
		}
	})
});

let PatientCommunicationInput = new GraphQLInputObjectType({
	name: 'PatientCommunicationInput',
	description: 'This patient is known to be an animal.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		language: {
			type: require('./codeableconcept.input'),
			description: 'The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. \"en\" for English, or \"en-US\" for American English versus \"en-EN\" for England English.'
		},
		preferred: {
			type: GraphQLBoolean,
			description: 'Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).'
		},
		_preferred: {
			type: require('./extension.input'),
			description: 'Extensions for preferred'
		}
	})
});

let PatientLinkInput = new GraphQLInputObjectType({
	name: 'PatientLinkInput',
	description: 'This patient is known to be an animal.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		other: {
			type: require('./reference.input'),
			description: 'The other patient resource that the link refers to.'
		},
		type: {
			type: PatientLinkTypeType,
			description: 'The type of link between this patient resource and another patient resource.'
		},
		_type: {
			type: require('./extension.input'),
			description: 'Extensions for type'
		}
	})
});

/**
 * @name exports
 * @summary Patient Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PatientInput',
	description: 'Demographics and other administrative information about an individual or animal receiving care or other health-related services.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: PatientResourceType,
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'An identifier for this patient.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this patient record is in active use.'
		},
		_active: {
			type: require('./extension.input'),
			description: 'Extensions for active'
		},
		name: {
			type: new GraphQLList(require('./humanname.input')),
			description: 'A name associated with the individual.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.'
		},
		gender: {
			type: PatientGenderType,
			description: 'Whether this patient record is in gender use.'
		},
		_gender: {
			type: require('./extension.input'),
			description: 'Extensions for gender'
		},
		birthDate: {
			type: DateScalar,
			description: 'The date of birth for the individual.'
		},
		_birthDate: {
			type: require('./extension.input'),
			description: 'Extensions for birthDate'
		},
		deceasedBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates if the individual is deceased or not.'
		},
		_deceasedBoolean: {
			type: require('./extension.input'),
			description: 'Extensions for deceasedBoolean'
		},
		deceasedDateTime: {
			type: DateTimeScalar,
			description: 'Indicates if the individual is deceased or not.'
		},
		_deceasedDateTime: {
			type: require('./extension.input'),
			description: 'Extensions for deceasedDateTime'
		},
		address: {
			type: new GraphQLList(require('./address.input')),
			description: 'Addresses for the individual.'
		},
		maritalStatus: {
			type: require('./codeableconcept.input'),
			description: 'This field contains a patient\'s most recent marital (civil) status.'
		},
		multipleBirthBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).'
		},
		_multipleBirthBoolean: {
			type: require('./extension.input'),
			description: 'Extensions for multipleBirthBoolean'
		},
		multipleBirthInteger: {
			type: GraphQLInt,
			description: 'Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).'
		},
		_multipleBirthInteger: {
			type: require('./extension.input'),
			description: 'Extensions for multipleBirthInteger'
		},
		photo: {
			type: new GraphQLList(require('./attachment.input')),
			description: 'Image of the patient.'
		},
		contact: {
			type: new GraphQLList(PatientContactInput),
			description: 'A contact party (e.g. guardian, partner, friend) for the patient.'
		},
		animal: {
			type: PatientAnimalInput,
			description: 'This patient is known to be an animal.'
		},
		communication: {
			type: new GraphQLList(PatientCommunicationInput),
			description: 'Languages which may be used to communicate with the patient about his or her health.'
		},
		generalPractitioner: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Patient\'s nominated care provider.'
		},
		managingOrganization: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Organization that is the custodian of the patient record.'
		},
		link: {
			type: new GraphQLList(PatientLinkInput),
			description: 'Link to another patient resource that concerns the same actual patient.'
		},
		race: {
			type: GraphQLString,
			description: 'Concepts classifying the person into a named category of humans sharing common history, traits, geographical origin or nationality.'
				+ ' The race codes used to represent these concepts are based upon the CDC Race and Ethnicity Code Set Version 1.0 which includes over 900 concepts for representing race and ethnicity of which 921 reference race.'
				+ ' The race concepts are grouped by and pre-mapped to the 5 OMB race categories: - American Indian or Alaska Native - Asian - Black or African American - Native Hawaiian or Other Pacific Islander - White.'
		},
		_race: {
			type: require('./extension.input'),
			description: 'Extensions for race'
		},
		ethnicity: {
			type: GraphQLString,
			description: 'The codes for the ethnicity categories - \'Hispanic or Latino\' and \'Non Hispanic or Latino\' - as defined by the OMB Standards for Maintaining, Collecting, and Presenting Federal Data on Race and Ethnicity, Statistical Policy Directive No. 15, as revised, October 30, 1997.'
		},
		_ethnicity: {
			type: require('./extension.input'),
			description: 'Extensions for ethnicity'
		},
		birthsex: {
			type: PatientBirthsexType,
			description: 'The gender of the patient at birth.'
		},
		_birthsex: {
			type: require('./extension.input'),
			description: 'Extensions for birthsex'
		}
	})
});
