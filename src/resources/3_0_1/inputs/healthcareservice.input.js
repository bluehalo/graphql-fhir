const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let HealthcareServiceResourceInputType = new GraphQLEnumType({
	name: 'HealthcareServiceResourceInputType',
	values: {
		HealthcareService: { value: 'HealthcareService' }
	}
});

/**
 * @name exports
 * @summary HealthcareService Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'HealthcareService_Input',
	description: 'Base StructureDefinition for HealthcareService Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(HealthcareServiceResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'External identifiers for this item.'
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this healthcareservice record is in active use.'
		},
		_active: {
			type: require('./element.input'),
			description: 'Whether this healthcareservice record is in active use.'
		},
		providedBy: {
			type: require('./reference.input'),
			description: 'The organization that provides this healthcare service.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-category
		category: {
			type: require('./codeableconcept.input'),
			description: 'Identifies the broad category of service being performed or delivered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-type
		type: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The specific type of service that may be delivered or performed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		specialty: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Collection of specialties handled by the service site. This is more of a medical term.'
		},
		location: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The location(s) where this healthcare service may be provided.'
		},
		name: {
			type: GraphQLString,
			description: 'Further description of the service as it would be presented to a consumer while searching.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Further description of the service as it would be presented to a consumer while searching.'
		},
		comment: {
			type: GraphQLString,
			description: 'Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.'
		},
		_comment: {
			type: require('./element.input'),
			description: 'Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.'
		},
		extraDetails: {
			type: GraphQLString,
			description: 'Extra details about the service that can\'t be placed in the other fields.'
		},
		_extraDetails: {
			type: require('./element.input'),
			description: 'Extra details about the service that can\'t be placed in the other fields.'
		},
		photo: {
			type: require('./attachment.input'),
			description: 'If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'List of contacts related to this specific healthcare service.'
		},
		coverageArea: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The location(s) that this service is available to (not where the service is provided).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-provision-conditions
		serviceProvisionCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The code(s) that detail the conditions under which the healthcare service is available/offered.'
		},
		eligibility: {
			type: require('./codeableconcept.input'),
			description: 'Does this service have specific eligibility requirements that need to be met in order to use the service?.'
		},
		eligibilityNote: {
			type: GraphQLString,
			description: 'Describes the eligibility conditions for the service.'
		},
		_eligibilityNote: {
			type: require('./element.input'),
			description: 'Describes the eligibility conditions for the service.'
		},
		programName: {
			type: new GraphQLList(GraphQLString),
			description: 'Program Names that can be used to categorize the service.'
		},
		_programName: {
			type: require('./element.input'),
			description: 'Program Names that can be used to categorize the service.'
		},
		characteristic: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Collection of characteristics (attributes).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-referral-method
		referralMethod: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.'
		},
		appointmentRequired: {
			type: GraphQLBoolean,
			description: 'Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.'
		},
		_appointmentRequired: {
			type: require('./element.input'),
			description: 'Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.'
		},
		availableTime: {
			type: new GraphQLList(require('./healthcareserviceavailabletime.input')),
			description: 'A collection of times that the Service Site is available.'
		},
		notAvailable: {
			type: new GraphQLList(require('./healthcareservicenotavailable.input')),
			description: 'The HealthcareService is not available during this period of time due to the provided reason.'
		},
		availabilityExceptions: {
			type: GraphQLString,
			description: 'A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.'
		},
		_availabilityExceptions: {
			type: require('./element.input'),
			description: 'A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.'
		},
		endpoint: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.'
		}
	})
});
