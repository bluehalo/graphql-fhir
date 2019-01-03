const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let PractitionerResourceType = new GraphQLEnumType({
	name: 'PractitionerResourceType',
	values: {
		Practitioner: { value: 'Practitioner' }
	}
});

/**
 * @name exports
 * @summary Practitioner Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Practitioner',
	description: 'Base StructureDefinition for Practitioner Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(PractitionerResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'An identifier that applies to this person in this role.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this practitioner\'s record is in active use.'
		},
		_active: {
			type: require('./element.schema'),
			description: 'Whether this practitioner\'s record is in active use.'
		},
		name: {
			type: require('./humanname.schema'),
			description: 'A name associated with the person.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'A contact detail for the practitioner, e.g. a telephone number or an email address.'
		},
		address: {
			type: new GraphQLList(require('./address.schema')),
			description: 'The postal address where the practitioner can be found or visited or to which mail can be delivered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description: 'Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.'
		},
		_gender: {
			type: require('./element.schema'),
			description: 'Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.'
		},
		birthDate: {
			type: DateScalar,
			description: 'The date of birth for the practitioner.'
		},
		_birthDate: {
			type: require('./element.schema'),
			description: 'The date of birth for the practitioner.'
		},
		photo: {
			type: new GraphQLList(require('./attachment.schema')),
			description: 'Image of the person.'
		},
		practitionerRole: {
			type: new GraphQLList(require('./practitionerpractitionerrole.schema')),
			description: 'The list of roles/organizations that the practitioner is associated with.'
		},
		qualification: {
			type: new GraphQLList(require('./practitionerqualification.schema')),
			description: 'Qualifications obtained by training and certification.'
		},
		communication: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A language the practitioner is able to use in patient communication.'
		}
	})
});
