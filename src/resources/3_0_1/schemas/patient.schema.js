const {
	GraphQLObjectType,
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
	name: 'PatientResourceType',
	values: {
		Patient: { value: 'Patient' }
	}
});

let PatientGenderType = new GraphQLEnumType({
	name: 'PatientGenderType',
	values: {
		male: { value: 'male' },
		female: { value: 'female' },
		other: { value: 'other' },
		unknown: { value: 'unknown' }
	}
});

let PatientContactGenderType = new GraphQLEnumType({
	name: 'PatientContactGenderType',
	values: {
		male: { value: 'male' },
		female: { value: 'female' },
		other: { value: 'other' },
		unknown: { value: 'unknown' }
	}
});

let PatientLinkTypeType = new GraphQLEnumType({
	name: 'PatientLinkTypeType',
	values: {
		replaced_by: { value: 'replaced_by' },
		replaces: { value: 'replaces' },
		refer: { value: 'refer' },
		seealso: { value: 'seealso' }
	}
});

let PatientBirthsexType = new GraphQLEnumType({
	name: 'PatientBirthsexType',
	values: {
		male: { value: 'male' },
		female: { value: 'female' },
		unknown: { value: 'unknown' }
	}
});

// Backbone Elements
let PatientContactSchema = new GraphQLObjectType({
	name: 'PatientContactSchema',
	description: 'A contact party (e.g. guardian, partner, friend) for the patient.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		relationship: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The nature of the relationship between the patient and the contact person.'
		},
		name: {
			type: require('./humanname.schema'),
			description: 'A name associated with the contact person.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'A contact detail for the person, e.g. a telephone number or an email address.'
		},
		address: {
			type: require('./address.schema'),
			description: 'Address for the contact person.'
		},
		gender: {
			type: PatientContactGenderType,
			description: 'Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.'
		},
		organization: {
			type: require('./reference.schema'),
			description: 'Organization on behalf of which the contact is acting or for which the contact is working.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The period during which this contact person or organization is valid to be contacted relating to this patient.'
		}
	})
});

let PatientAnimalSchema = new GraphQLObjectType({
	name: 'PatientAnimalSchema',
	description: 'This patient is known to be an animal.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		species: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Identifies the high level taxonomic categorization of the kind of animal.'
		},
		breed: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Identifies the detailed categorization of the kind of animal.'
		},
		genderStatus: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Indicates the current state of the animal\'s reproductive organs.'
		}
	})
});

let PatientCommunicationSchema = new GraphQLObjectType({
	name: 'PatientCommunicationSchema',
	description: 'This patient is known to be an animal.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		language: {
			type: require('./codeableconcept.schema'),
			description: 'The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. \"en\" for English, or \"en-US\" for American English versus \"en-EN\" for England English.'
		},
		preferred: {
			type: GraphQLBoolean,
			description: 'Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).'
		},
		_preferred: {
			type: require('./element.schema'),
			description: 'Extensions for preferred'
		}
	})
});

let PatientLinkSchema = new GraphQLObjectType({
	name: 'PatientLinkSchema',
	description: 'This patient is known to be an animal.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		other: {
			type: require('./reference.schema'),
			description: 'The other patient resource that the link refers to.'
		},
		type: {
			type: PatientLinkTypeType,
			description: 'The type of link between this patient resource and another patient resource.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Extensions for type'
		}
	})
});

/**
 * @name exports
 * @summary Patient Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Patient',
	description: 'Demographics and other administrative information about an individual or animal receiving care or other health-related services.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: PatientResourceType,
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'An identifier for this patient.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this patient record is in active use.'
		},
		_active: {
			type: require('./element.schema'),
			description: 'Extensions for active'
		},
		name: {
			type: new GraphQLList(require('./humanname.schema')),
			description: 'A name associated with the individual.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.'
		},
		gender: {
			type: PatientGenderType,
			description: 'Whether this patient record is in gender use.'
		},
		_gender: {
			type: require('./element.schema'),
			description: 'Extensions for gender'
		},
		birthDate: {
			type: DateScalar,
			description: 'The date of birth for the individual.'
		},
		_birthDate: {
			type: require('./element.schema'),
			description: 'Extensions for birthDate'
		},
		deceasedBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates if the individual is deceased or not.'
		},
		_deceasedBoolean: {
			type: require('./element.schema'),
			description: 'Extensions for deceasedBoolean'
		},
		deceasedDateTime: {
			type: DateTimeScalar,
			description: 'Indicates if the individual is deceased or not.'
		},
		_deceasedDateTime: {
			type: require('./element.schema'),
			description: 'Extensions for deceasedDateTime'
		},
		address: {
			type: new GraphQLList(require('./address.schema')),
			description: 'Addresses for the individual.'
		},
		maritalStatus: {
			type: require('./codeableconcept.schema'),
			description: 'This field contains a patient\'s most recent marital (civil) status.'
		},
		multipleBirthBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).'
		},
		_multipleBirthBoolean: {
			type: require('./element.schema'),
			description: 'Extensions for multipleBirthBoolean'
		},
		multipleBirthInteger: {
			type: GraphQLInt,
			description: 'Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).'
		},
		_multipleBirthInteger: {
			type: require('./element.schema'),
			description: 'Extensions for multipleBirthInteger'
		},
		photo: {
			type: new GraphQLList(require('./attachment.schema')),
			description: 'Image of the patient.'
		},
		contact: {
			type: new GraphQLList(PatientContactSchema),
			description: 'A contact party (e.g. guardian, partner, friend) for the patient.'
		},
		animal: {
			type: PatientAnimalSchema,
			description: 'This patient is known to be an animal.'
		},
		communication: {
			type: new GraphQLList(PatientCommunicationSchema),
			description: 'Languages which may be used to communicate with the patient about his or her health.'
		},
		generalPractitioner: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Patient\'s nominated care provider.'
		},
		managingOrganization: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Organization that is the custodian of the patient record.'
		},
		link: {
			type: new GraphQLList(PatientLinkSchema),
			description: 'Link to another patient resource that concerns the same actual patient.'
		},
		race: {
			type: GraphQLString,
			description: 'Concepts classifying the person into a named category of humans sharing common history, traits, geographical origin or nationality.'
				+ ' The race codes used to represent these concepts are based upon the CDC Race and Ethnicity Code Set Version 1.0 which includes over 900 concepts for representing race and ethnicity of which 921 reference race.'
				+ ' The race concepts are grouped by and pre-mapped to the 5 OMB race categories: - American Indian or Alaska Native - Asian - Black or African American - Native Hawaiian or Other Pacific Islander - White.'
		},
		_race: {
			type: require('./element.schema'),
			description: 'Extensions for race'
		},
		ethnicity: {
			type: GraphQLString,
			description: 'The codes for the ethnicity categories - \'Hispanic or Latino\' and \'Non Hispanic or Latino\' - as defined by the OMB Standards for Maintaining, Collecting, and Presenting Federal Data on Race and Ethnicity, Statistical Policy Directive No. 15, as revised, October 30, 1997.'
		},
		_ethnicity: {
			type: require('./element.schema'),
			description: 'Extensions for ethnicity'
		},
		birthsex: {
			type: PatientBirthsexType,
			description: 'The gender of the patient at birth.'
		},
		_birthsex: {
			type: require('./element.schema'),
			description: 'Extensions for birthsex'
		}
	})
});
