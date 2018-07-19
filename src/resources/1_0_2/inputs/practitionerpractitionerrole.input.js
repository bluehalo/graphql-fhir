const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PractitionerPractitionerRole Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PractitionerPractitionerRole_Input',
	description: 'The list of roles/organizations that the practitioner is associated with.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		managingOrganization: {
			type: require('./reference.input'),
			description: 'The organization where the Practitioner performs the roles associated.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/practitioner-role
		role: {
			type: require('./codeableconcept.input'),
			description: 'Roles which this practitioner is authorized to perform for the organization.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/practitioner-specialty
		specialty: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Specific specialty of the practitioner.'
		},
		period: {
			type: require('./period.input'),
			description: 'The period during which the person is authorized to act as a practitioner in these role(s) for the organization.'
		},
		location: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The location(s) at which this practitioner provides care.'
		},
		healthcareService: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The list of healthcare services that this worker provides for this role\'s Organization/Location(s).'
		}
	})
});
