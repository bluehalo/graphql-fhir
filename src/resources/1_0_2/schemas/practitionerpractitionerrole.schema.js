const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PractitionerPractitionerRole Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PractitionerPractitionerRole',
	description: 'The list of roles/organizations that the practitioner is associated with.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		managingOrganization: {
			type: require('./reference.schema'),
			description: 'The organization where the Practitioner performs the roles associated.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/practitioner-role
		role: {
			type: require('./codeableconcept.schema'),
			description: 'Roles which this practitioner is authorized to perform for the organization.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/practitioner-specialty
		specialty: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Specific specialty of the practitioner.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The period during which the person is authorized to act as a practitioner in these role(s) for the organization.'
		},
		location: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The location(s) at which this practitioner provides care.'
		},
		healthcareService: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The list of healthcare services that this worker provides for this role\'s Organization/Location(s).'
		}
	})
});
