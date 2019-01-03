const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let HealthcareServiceResourceType = new GraphQLEnumType({
	name: 'HealthcareServiceResourceType',
	values: {
		HealthcareService: { value: 'HealthcareService' },
	},
});

/**
 * @name exports
 * @summary HealthcareService Schema
 */
module.exports = new GraphQLObjectType({
	name: 'HealthcareService',
	description: 'Base StructureDefinition for HealthcareService Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(HealthcareServiceResourceType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.schema')),
				description: 'External identifiers for this item.',
			},
			providedBy: {
				type: require('./reference.schema'),
				description: 'The organization that provides this healthcare service.',
			},
			serviceCategory: {
				type: require('./codeableconcept.schema'),
				description:
					'Identifies the broad category of service being performed or delivered.',
			},
			serviceType: {
				type: new GraphQLList(require('./healthcareserviceservicetype.schema')),
				description:
					'A specific type of service that may be delivered or performed.',
			},
			location: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description:
					'The location where this healthcare service may be provided.',
			},
			serviceName: {
				type: GraphQLString,
				description:
					'Further description of the service as it would be presented to a consumer while searching.',
			},
			_serviceName: {
				type: require('./element.schema'),
				description:
					'Further description of the service as it would be presented to a consumer while searching.',
			},
			comment: {
				type: GraphQLString,
				description:
					'Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.',
			},
			_comment: {
				type: require('./element.schema'),
				description:
					'Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.',
			},
			extraDetails: {
				type: GraphQLString,
				description:
					"Extra details about the service that can't be placed in the other fields.",
			},
			_extraDetails: {
				type: require('./element.schema'),
				description:
					"Extra details about the service that can't be placed in the other fields.",
			},
			photo: {
				type: require('./attachment.schema'),
				description:
					'If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.',
			},
			telecom: {
				type: new GraphQLList(require('./contactpoint.schema')),
				description:
					'List of contacts related to this specific healthcare service.',
			},
			coverageArea: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'The location(s) that this service is available to (not where the service is provided).',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/service-provision-conditions
			serviceProvisionCode: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The code(s) that detail the conditions under which the healthcare service is available/offered.',
			},
			eligibility: {
				type: require('./codeableconcept.schema'),
				description:
					'Does this service have specific eligibility requirements that need to be met in order to use the service?.',
			},
			eligibilityNote: {
				type: GraphQLString,
				description: 'Describes the eligibility conditions for the service.',
			},
			_eligibilityNote: {
				type: require('./element.schema'),
				description: 'Describes the eligibility conditions for the service.',
			},
			programName: {
				type: new GraphQLList(GraphQLString),
				description:
					'Program Names that can be used to categorize the service.',
			},
			_programName: {
				type: require('./element.schema'),
				description:
					'Program Names that can be used to categorize the service.',
			},
			characteristic: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description: 'Collection of characteristics (attributes).',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/service-referral-method
			referralMethod: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.',
			},
			publicKey: {
				type: GraphQLString,
				description:
					"The public part of the 'keys' allocated to an Organization by an accredited body to support secure exchange of data over the internet. To be provided by the Organization, where available.",
			},
			_publicKey: {
				type: require('./element.schema'),
				description:
					"The public part of the 'keys' allocated to an Organization by an accredited body to support secure exchange of data over the internet. To be provided by the Organization, where available.",
			},
			appointmentRequired: {
				type: GraphQLBoolean,
				description:
					'Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.',
			},
			_appointmentRequired: {
				type: require('./element.schema'),
				description:
					'Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.',
			},
			availableTime: {
				type: new GraphQLList(
					require('./healthcareserviceavailabletime.schema'),
				),
				description:
					'A collection of times that the Service Site is available.',
			},
			notAvailable: {
				type: new GraphQLList(
					require('./healthcareservicenotavailable.schema'),
				),
				description:
					'The HealthcareService is not available during this period of time due to the provided reason.',
			},
			availabilityExceptions: {
				type: GraphQLString,
				description:
					'A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.',
			},
			_availabilityExceptions: {
				type: require('./element.schema'),
				description:
					'A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.',
			},
		}),
});
