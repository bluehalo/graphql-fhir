const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary HealthcareService Schema
 */
module.exports = new GraphQLObjectType({
	name: 'HealthcareService',
	description: 'Base StructureDefinition for HealthcareService Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'HealthcareService_Enum_schema',
					values: { HealthcareService: { value: 'HealthcareService' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'External identifiers for this item.',
		},
		_active: {
			type: require('./element.schema.js'),
			description: 'Whether this healthcareservice record is in active use.',
		},
		active: {
			type: GraphQLBoolean,
			description: 'Whether this healthcareservice record is in active use.',
		},
		providedBy: {
			type: new GraphQLUnionType({
				name: 'HealthcareServiceprovidedBy_providedBy_Union',
				description: 'The organization that provides this healthcare service.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The organization that provides this healthcare service.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-category
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Identifies the broad category of service being performed or delivered.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-type
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The specific type of service that may be delivered or performed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		specialty: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Collection of specialties handled by the service site. This is more of a medical term.',
		},
		location: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'HealthcareServicelocation_location_Union',
					description:
						'The location(s) where this healthcare service may be provided.',
					types: () => [require('./location.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
					},
				}),
			),
			description:
				'The location(s) where this healthcare service may be provided.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'Further description of the service as it would be presented to a consumer while searching.',
		},
		name: {
			type: GraphQLString,
			description:
				'Further description of the service as it would be presented to a consumer while searching.',
		},
		_comment: {
			type: require('./element.schema.js'),
			description:
				'Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.',
		},
		comment: {
			type: GraphQLString,
			description:
				'Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.',
		},
		_extraDetails: {
			type: require('./element.schema.js'),
			description:
				"Extra details about the service that can't be placed in the other fields.",
		},
		extraDetails: {
			type: GraphQLString,
			description:
				"Extra details about the service that can't be placed in the other fields.",
		},
		photo: {
			type: require('./attachment.schema.js'),
			description:
				'If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema.js')),
			description:
				'List of contacts related to this specific healthcare service.',
		},
		coverageArea: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'HealthcareServicecoverageArea_coverageArea_Union',
					description:
						'The location(s) that this service is available to (not where the service is provided).',
					types: () => [require('./location.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
					},
				}),
			),
			description:
				'The location(s) that this service is available to (not where the service is provided).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-provision-conditions
		serviceProvisionCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The code(s) that detail the conditions under which the healthcare service is available/offered.',
		},
		eligibility: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Does this service have specific eligibility requirements that need to be met in order to use the service?',
		},
		_eligibilityNote: {
			type: require('./element.schema.js'),
			description: 'Describes the eligibility conditions for the service.',
		},
		eligibilityNote: {
			type: GraphQLString,
			description: 'Describes the eligibility conditions for the service.',
		},
		_programName: {
			type: require('./element.schema.js'),
			description: 'Program Names that can be used to categorize the service.',
		},
		programName: {
			type: new GraphQLList(GraphQLString),
			description: 'Program Names that can be used to categorize the service.',
		},
		characteristic: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Collection of characteristics (attributes).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-referral-method
		referralMethod: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.',
		},
		_appointmentRequired: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.',
		},
		appointmentRequired: {
			type: GraphQLBoolean,
			description:
				'Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.',
		},
		availableTime: {
			type: new GraphQLList(
				require('./healthcareserviceavailabletime.schema.js'),
			),
			description: 'A collection of times that the Service Site is available.',
		},
		notAvailable: {
			type: new GraphQLList(
				require('./healthcareservicenotavailable.schema.js'),
			),
			description:
				'The HealthcareService is not available during this period of time due to the provided reason.',
		},
		_availabilityExceptions: {
			type: require('./element.schema.js'),
			description:
				'A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.',
		},
		availabilityExceptions: {
			type: GraphQLString,
			description:
				'A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.',
		},
		endpoint: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'HealthcareServiceendpoint_endpoint_Union',
					description:
						'Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.',
					types: () => [require('./endpoint.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Endpoint') {
							return require('./endpoint.schema.js');
						}
					},
				}),
			),
			description:
				'Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.',
		},
	}),
});
