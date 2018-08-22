const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let PractitionerRoleResourceType = new GraphQLEnumType({
	name: 'PractitionerRoleResourceType',
	values: {
		PractitionerRole: { value: 'PractitionerRole' }
	}
});

/**
 * @name exports
 * @summary PractitionerRole Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PractitionerRole',
	description: 'Base StructureDefinition for PractitionerRole Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(PractitionerRoleResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Business Identifiers that are specific to a role/location.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this practitioner\'s record is in active use.'
		},
		_active: {
			type: require('./element.schema'),
			description: 'Whether this practitioner\'s record is in active use.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The period during which the person is authorized to act as a practitioner in these role(s) for the organization.'
		},
		practitioner: {
			type: require('./reference.schema'),
			description: 'Practitioner that is able to provide the defined services for the organation.'
		},
		organization: {
			type: require('./reference.schema'),
			description: 'The organization where the Practitioner performs the roles associated.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/practitioner-role
		code: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Roles which this practitioner is authorized to perform for the organization.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		specialty: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Specific specialty of the practitioner.'
		},
		location: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The location(s) at which this practitioner provides care.'
		},
		healthcareService: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The list of healthcare services that this worker provides for this role\'s Organization/Location(s).'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'Contact details that are specific to the role/location/service.'
		},
		availableTime: {
			type: new GraphQLList(require('./practitionerroleavailabletime.schema')),
			description: 'A collection of times that the Service Site is available.'
		},
		notAvailable: {
			type: new GraphQLList(require('./practitionerrolenotavailable.schema')),
			description: 'The HealthcareService is not available during this period of time due to the provided reason.'
		},
		availabilityExceptions: {
			type: GraphQLString,
			description: 'A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.'
		},
		_availabilityExceptions: {
			type: require('./element.schema'),
			description: 'A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.'
		},
		endpoint: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Technical endpoints providing access to services operated for the practitioner with this role.'
		}
	})
});
