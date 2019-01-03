const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let PractitionerResourceInputType = new GraphQLEnumType({
	name: 'PractitionerResourceInputType',
	values: {
		Practitioner: { value: 'Practitioner' }
	}
});

/**
 * @name exports
 * @summary Practitioner Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Practitioner_Input',
	description: 'Base StructureDefinition for Practitioner Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(PractitionerResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'An identifier that applies to this person in this role.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this practitioner\'s record is in active use.'
		},
		_active: {
			type: require('./element.input'),
			description: 'Whether this practitioner\'s record is in active use.'
		},
		name: {
			type: new GraphQLList(require('./humanname.input')),
			description: 'The name(s) associated with the practitioner.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'A contact detail for the practitioner, e.g. a telephone number or an email address.'
		},
		address: {
			type: new GraphQLList(require('./address.input')),
			description: 'Address(es) of the practitioner that are not role specific (typically home address).  Work addresses are not typically entered in this property as they are usually role dependent.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description: 'Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.'
		},
		_gender: {
			type: require('./element.input'),
			description: 'Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.'
		},
		birthDate: {
			type: DateScalar,
			description: 'The date of birth for the practitioner.'
		},
		_birthDate: {
			type: require('./element.input'),
			description: 'The date of birth for the practitioner.'
		},
		photo: {
			type: new GraphQLList(require('./attachment.input')),
			description: 'Image of the person.'
		},
		qualification: {
			type: new GraphQLList(require('./practitionerqualification.input')),
			description: 'Qualifications obtained by training and certification.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/languages
		communication: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A language the practitioner is able to use in patient communication.'
		}
	})
});
