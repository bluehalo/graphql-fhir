const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean, GraphQLInt } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let PatientResourceType = new GraphQLEnumType({
	name: 'PatientResourceType',
	values: {
		Patient: { value: 'Patient' }
	}
});

/**
 * @name exports
 * @summary Patient Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Patient',
	description: 'Base StructureDefinition for Patient Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(PatientResourceType),
			description: 'Type of this resource'
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
			description: 'Whether this patient record is in active use.'
		},
		name: {
			type: new GraphQLList(require('./humanname.schema')),
			description: 'A name associated with the individual.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description: 'Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.'
		},
		_gender: {
			type: require('./element.schema'),
			description: 'Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.'
		},
		birthDate: {
			type: DateScalar,
			description: 'The date of birth for the individual.'
		},
		_birthDate: {
			type: require('./element.schema'),
			description: 'The date of birth for the individual.'
		},
		deceasedBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates if the individual is deceased or not.'
		},
		_deceasedBoolean: {
			type: require('./element.schema'),
			description: 'Indicates if the individual is deceased or not.'
		},
		deceasedDateTime: {
			type: DateTimeScalar,
			description: 'Indicates if the individual is deceased or not.'
		},
		_deceasedDateTime: {
			type: require('./element.schema'),
			description: 'Indicates if the individual is deceased or not.'
		},
		address: {
			type: new GraphQLList(require('./address.schema')),
			description: 'Addresses for the individual.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/marital-status
		maritalStatus: {
			type: require('./codeableconcept.schema'),
			description: 'This field contains a patient\'s most recent marital (civil) status.'
		},
		multipleBirthBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates whether the patient is part of a multiple or indicates the actual birth order.'
		},
		_multipleBirthBoolean: {
			type: require('./element.schema'),
			description: 'Indicates whether the patient is part of a multiple or indicates the actual birth order.'
		},
		multipleBirthInteger: {
			type: GraphQLInt,
			description: 'Indicates whether the patient is part of a multiple or indicates the actual birth order.'
		},
		_multipleBirthInteger: {
			type: require('./element.schema'),
			description: 'Indicates whether the patient is part of a multiple or indicates the actual birth order.'
		},
		photo: {
			type: new GraphQLList(require('./attachment.schema')),
			description: 'Image of the patient.'
		},
		contact: {
			type: new GraphQLList(require('./patientcontact.schema')),
			description: 'A contact party (e.g. guardian, partner, friend) for the patient.'
		},
		animal: {
			type: require('./patientanimal.schema'),
			description: 'This patient is known to be an animal.'
		},
		communication: {
			type: new GraphQLList(require('./patientcommunication.schema')),
			description: 'Languages which may be used to communicate with the patient about his or her health.'
		},
		careProvider: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Patient\'s nominated care provider.'
		},
		managingOrganization: {
			type: require('./reference.schema'),
			description: 'Organization that is the custodian of the patient record.'
		},
		link: {
			type: new GraphQLList(require('./patientlink.schema')),
			description: 'Link to another patient resource that concerns the same actual patient.'
		}
	})
});
