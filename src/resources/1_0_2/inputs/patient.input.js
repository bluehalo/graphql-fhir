const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean, GraphQLInt } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Patient Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Patient_Input',
	description: 'Base StructureDefinition for Patient Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
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
			type: require('./element.input'),
			description: 'Whether this patient record is in active use.'
		},
		name: {
			type: new GraphQLList(require('./humanname.input')),
			description: 'A name associated with the individual.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description: 'Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.'
		},
		_gender: {
			type: require('./element.input'),
			description: 'Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.'
		},
		birthDate: {
			type: DateScalar,
			description: 'The date of birth for the individual.'
		},
		_birthDate: {
			type: require('./element.input'),
			description: 'The date of birth for the individual.'
		},
		deceasedBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates if the individual is deceased or not.'
		},
		_deceasedBoolean: {
			type: require('./element.input'),
			description: 'Indicates if the individual is deceased or not.'
		},
		deceasedDateTime: {
			type: DateTimeScalar,
			description: 'Indicates if the individual is deceased or not.'
		},
		_deceasedDateTime: {
			type: require('./element.input'),
			description: 'Indicates if the individual is deceased or not.'
		},
		address: {
			type: new GraphQLList(require('./address.input')),
			description: 'Addresses for the individual.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/marital-status
		maritalStatus: {
			type: require('./codeableconcept.input'),
			description: 'This field contains a patient\'s most recent marital (civil) status.'
		},
		multipleBirthBoolean: {
			type: GraphQLBoolean,
			description: 'Indicates whether the patient is part of a multiple or indicates the actual birth order.'
		},
		_multipleBirthBoolean: {
			type: require('./element.input'),
			description: 'Indicates whether the patient is part of a multiple or indicates the actual birth order.'
		},
		multipleBirthInteger: {
			type: GraphQLInt,
			description: 'Indicates whether the patient is part of a multiple or indicates the actual birth order.'
		},
		_multipleBirthInteger: {
			type: require('./element.input'),
			description: 'Indicates whether the patient is part of a multiple or indicates the actual birth order.'
		},
		photo: {
			type: new GraphQLList(require('./attachment.input')),
			description: 'Image of the patient.'
		},
		contact: {
			type: new GraphQLList(require('./patientcontact.input')),
			description: 'A contact party (e.g. guardian, partner, friend) for the patient.'
		},
		animal: {
			type: require('./patientanimal.input'),
			description: 'This patient is known to be an animal.'
		},
		communication: {
			type: new GraphQLList(require('./patientcommunication.input')),
			description: 'Languages which may be used to communicate with the patient about his or her health.'
		},
		careProvider: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Patient\'s nominated care provider.'
		},
		managingOrganization: {
			type: require('./reference.input'),
			description: 'Organization that is the custodian of the patient record.'
		},
		link: {
			type: new GraphQLList(require('./patientlink.input')),
			description: 'Link to another patient resource that concerns the same actual patient.'
		}
	})
});
