const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Patient Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Patient_Input',
	description: 'Base StructureDefinition for Patient Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Patient_Enum_input',
					values: { Patient: { value: 'Patient' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description: 'An identifier for this patient.',
		},
		_active: {
			type: require('./element.input.js'),
			description: 'Whether this patient record is in active use.',
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this patient record is in active use.',
		},
		name: {
			type: new GraphQLList(require('./humanname.input.js')),
			description: 'A name associated with the individual.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input.js')),
			description:
				'A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.',
		},
		_gender: {
			type: require('./element.input.js'),
			description:
				'Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description:
				'Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.',
		},
		_birthDate: {
			type: require('./element.input.js'),
			description: 'The date of birth for the individual.',
		},
		birthDate: {
			type: DateScalar,
			description: 'The date of birth for the individual.',
		},
		_deceasedBoolean: {
			type: require('./element.input.js'),
			description: 'Indicates if the individual is deceased or not.',
		},
		deceasedBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates if the individual is deceased or not.',
		},
		_deceasedDateTime: {
			type: require('./element.input.js'),
			description: 'Indicates if the individual is deceased or not.',
		},
		deceasedDateTime: {
			type: DateTimeScalar,
			description: 'Indicates if the individual is deceased or not.',
		},
		address: {
			type: new GraphQLList(require('./address.input.js')),
			description: 'Addresses for the individual.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/marital-status
		maritalStatus: {
			type: require('./codeableconcept.input.js'),
			description:
				"This field contains a patient's most recent marital (civil) status.",
		},
		_multipleBirthBoolean: {
			type: require('./element.input.js'),
			description:
				'Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).',
		},
		multipleBirthBoolean: {
			type: GraphQLBoolean,
			description:
				'Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).',
		},
		_multipleBirthInteger: {
			type: require('./element.input.js'),
			description:
				'Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).',
		},
		multipleBirthInteger: {
			type: GraphQLInt,
			description:
				'Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).',
		},
		photo: {
			type: new GraphQLList(require('./attachment.input.js')),
			description: 'Image of the patient.',
		},
		contact: {
			type: new GraphQLList(require('./patientcontact.input.js')),
			description:
				'A contact party (e.g. guardian, partner, friend) for the patient.',
		},
		animal: {
			type: require('./patientanimal.input.js'),
			description: 'This patient is known to be an animal.',
		},
		communication: {
			type: new GraphQLList(require('./patientcommunication.input.js')),
			description:
				'Languages which may be used to communicate with the patient about his or her health.',
		},
		generalPractitioner: {
			type: new GraphQLList(GraphQLString),
			description: "Patient's nominated care provider.",
		},
		managingOrganization: {
			type: GraphQLString,
			description: 'Organization that is the custodian of the patient record.',
		},
		link: {
			type: new GraphQLList(require('./patientlink.input.js')),
			description:
				'Link to another patient resource that concerns the same actual patient.',
		},
	}),
});
