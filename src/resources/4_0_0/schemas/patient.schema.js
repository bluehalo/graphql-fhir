const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Patient Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Patient',
	description:
		'Demographics and other administrative information about an individual or animal receiving care or other health-related services.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Patient_Enum_schema',
					values: { Patient: { value: 'Patient' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'An identifier for this patient.',
		},
		_active: {
			type: require('./element.schema.js'),
			description:
				"Whether this patient record is in active use.  Many systems use this property to mark as non-current patients, such as those that have not been seen for a period of time based on an organization's business rules.  It is often used to filter patient lists to exclude inactive patients  Deceased patients may also be marked as inactive for the same reasons, but may be active for some time after death.",
		},
		active: {
			type: GraphQLBoolean,
			description:
				"Whether this patient record is in active use.  Many systems use this property to mark as non-current patients, such as those that have not been seen for a period of time based on an organization's business rules.  It is often used to filter patient lists to exclude inactive patients  Deceased patients may also be marked as inactive for the same reasons, but may be active for some time after death.",
		},
		name: {
			type: new GraphQLList(require('./humanname.schema.js')),
			description: 'A name associated with the individual.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema.js')),
			description:
				'A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.',
		},
		_gender: {
			type: require('./element.schema.js'),
			description:
				'Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.',
		},
		gender: {
			type: CodeScalar,
			description:
				'Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.',
		},
		_birthDate: {
			type: require('./element.schema.js'),
			description: 'The date of birth for the individual.',
		},
		birthDate: {
			type: DateScalar,
			description: 'The date of birth for the individual.',
		},
		_deceasedBoolean: {
			type: require('./element.schema.js'),
			description: 'Indicates if the individual is deceased or not.',
		},
		deceasedBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates if the individual is deceased or not.',
		},
		_deceasedDateTime: {
			type: require('./element.schema.js'),
			description: 'Indicates if the individual is deceased or not.',
		},
		deceasedDateTime: {
			type: DateTimeScalar,
			description: 'Indicates if the individual is deceased or not.',
		},
		address: {
			type: new GraphQLList(require('./address.schema.js')),
			description: 'An address for the individual.',
		},
		maritalStatus: {
			type: require('./codeableconcept.schema.js'),
			description:
				"This field contains a patient's most recent marital (civil) status.",
		},
		_multipleBirthBoolean: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).',
		},
		multipleBirthBoolean: {
			type: GraphQLBoolean,
			description:
				'Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).',
		},
		_multipleBirthInteger: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).',
		},
		multipleBirthInteger: {
			type: GraphQLInt,
			description:
				'Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).',
		},
		photo: {
			type: new GraphQLList(require('./attachment.schema.js')),
			description: 'Image of the patient.',
		},
		contact: {
			type: new GraphQLList(require('./patientcontact.schema.js')),
			description:
				'A contact party (e.g. guardian, partner, friend) for the patient.',
		},
		communication: {
			type: new GraphQLList(require('./patientcommunication.schema.js')),
			description:
				'A language which may be used to communicate with the patient about his or her health.',
		},
		generalPractitioner: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'PatientgeneralPractitioner_generalPractitioner_Union',
					description: "Patient's nominated care provider.",
					types: () => [
						require('./organization.schema.js'),
						require('./practitioner.schema.js'),
						require('./practitionerrole.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'PractitionerRole') {
							return require('./practitionerrole.schema.js');
						}
					},
				}),
			),
			description: "Patient's nominated care provider.",
		},
		managingOrganization: {
			type: new GraphQLUnionType({
				name: 'PatientmanagingOrganization_managingOrganization_Union',
				description:
					'Organization that is the custodian of the patient record.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'Organization that is the custodian of the patient record.',
		},
		link: {
			type: new GraphQLList(require('./patientlink.schema.js')),
			description:
				'Link to another patient resource that concerns the same actual patient.',
		},
	}),
});
