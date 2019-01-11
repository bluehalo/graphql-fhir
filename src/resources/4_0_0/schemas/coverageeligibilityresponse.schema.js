const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary CoverageEligibilityResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CoverageEligibilityResponse',
	description:
		'This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'CoverageEligibilityResponse_Enum_schema',
					values: {
						CoverageEligibilityResponse: {
							value: 'CoverageEligibilityResponse',
						},
					},
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'A unique identifier assigned to this coverage eligiblity request.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the resource instance.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the resource instance.',
		},
		_purpose: {
			type: require('./element.schema.js'),
			description:
				"Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.",
		},
		purpose: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description:
				"Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.",
		},
		patient: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CoverageEligibilityResponsepatient_patient_Union',
					description:
						'The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.',
					types: () => [require('./patient.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
					},
				}),
			),
			description:
				'The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.',
		},
		_servicedDate: {
			type: require('./element.schema.js'),
			description:
				'The date or dates when the enclosed suite of services were performed or completed.',
		},
		servicedDate: {
			type: DateScalar,
			description:
				'The date or dates when the enclosed suite of services were performed or completed.',
		},
		servicedPeriod: {
			type: require('./period.schema.js'),
			description:
				'The date or dates when the enclosed suite of services were performed or completed.',
		},
		_created: {
			type: require('./element.schema.js'),
			description: 'The date this resource was created.',
		},
		created: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date this resource was created.',
		},
		requestor: {
			type: new GraphQLUnionType({
				name: 'CoverageEligibilityResponserequestor_requestor_Union',
				description: 'The provider which is responsible for the request.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The provider which is responsible for the request.',
		},
		request: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CoverageEligibilityResponserequest_request_Union',
					description: 'Reference to the original request resource.',
					types: () => [require('./coverageeligibilityrequest.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'CoverageEligibilityRequest') {
							return require('./coverageeligibilityrequest.schema.js');
						}
					},
				}),
			),
			description: 'Reference to the original request resource.',
		},
		_outcome: {
			type: require('./element.schema.js'),
			description: 'The outcome of the request processing.',
		},
		outcome: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The outcome of the request processing.',
		},
		_disposition: {
			type: require('./element.schema.js'),
			description:
				'A human readable description of the status of the adjudication.',
		},
		disposition: {
			type: GraphQLString,
			description:
				'A human readable description of the status of the adjudication.',
		},
		insurer: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CoverageEligibilityResponseinsurer_insurer_Union',
					description:
						'The Insurer who issued the coverage in question and is the author of the response.',
					types: () => [require('./organization.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'The Insurer who issued the coverage in question and is the author of the response.',
		},
		insurance: {
			type: new GraphQLList(
				require('./coverageeligibilityresponseinsurance.schema.js'),
			),
			description:
				'Financial instruments for reimbursement for the health care products and services.',
		},
		_preAuthRef: {
			type: require('./element.schema.js'),
			description:
				'A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.',
		},
		preAuthRef: {
			type: GraphQLString,
			description:
				'A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.',
		},
		form: {
			type: require('./codeableconcept.schema.js'),
			description: 'A code for the form to be used for printing the content.',
		},
		error: {
			type: new GraphQLList(
				require('./coverageeligibilityresponseerror.schema.js'),
			),
			description: 'Errors encountered during the processing of the request.',
		},
	}),
});
