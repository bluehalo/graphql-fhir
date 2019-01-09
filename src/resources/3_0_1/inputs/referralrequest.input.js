const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ReferralRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ReferralRequest_Input',
	description: 'Base StructureDefinition for ReferralRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ReferralRequest_Enum_input',
					values: { ReferralRequest: { value: 'ReferralRequest' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Business identifier that uniquely identifies the referral/care transfer request instance.',
		},
		definition: {
			type: new GraphQLList(GraphQLString),
			description:
				'A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates any plans, proposals or orders that this request is intended to satisfy - in whole or in part.',
		},
		replaces: {
			type: new GraphQLList(GraphQLString),
			description:
				'Completed or terminated request(s) whose function is taken by this new request.',
		},
		groupIdentifier: {
			type: require('./identifier.input.js'),
			description:
				"The business identifier of the logical 'grouping' request/order that this referral is a part of.",
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status of the authorization/intention reflected by the referral request record.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of the authorization/intention reflected by the referral request record.',
		},
		_intent: {
			type: require('./element.input.js'),
			description:
				"Distinguishes the 'level' of authorization/demand implicit in this request.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-intent
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"Distinguishes the 'level' of authorization/demand implicit in this request.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/referral-type
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'An indication of the type of referral (or where applicable the type of transfer of care) request.',
		},
		_priority: {
			type: require('./element.input.js'),
			description:
				'An indication of the urgency of referral (or where applicable the type of transfer of care) request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description:
				'An indication of the urgency of referral (or where applicable the type of transfer of care) request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		serviceRequested: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.',
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The patient who is the subject of a referral or transfer of care request.',
		},
		context: {
			type: GraphQLString,
			description:
				'The encounter at which the request for referral or transfer of care is initiated.',
		},
		_occurrenceDateTime: {
			type: require('./element.input.js'),
			description:
				'The period of time within which the services identified in the referral/transfer of care is specified or required to occur.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description:
				'The period of time within which the services identified in the referral/transfer of care is specified or required to occur.',
		},
		occurrencePeriod: {
			type: require('./period.input.js'),
			description:
				'The period of time within which the services identified in the referral/transfer of care is specified or required to occur.',
		},
		_authoredOn: {
			type: require('./element.input.js'),
			description:
				'Date/DateTime of creation for draft requests and date of activation for active requests.',
		},
		authoredOn: {
			type: DateTimeScalar,
			description:
				'Date/DateTime of creation for draft requests and date of activation for active requests.',
		},
		requester: {
			type: require('./referralrequestrequester.input.js'),
			description:
				'The individual who initiated the request and has responsibility for its activation.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/practitioner-specialty
		specialty: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.',
		},
		recipient: {
			type: new GraphQLList(GraphQLString),
			description:
				'The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates another resource whose existence justifies this request.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.',
		},
		description: {
			type: GraphQLString,
			description:
				'The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.',
		},
		supportingInfo: {
			type: new GraphQLList(GraphQLString),
			description:
				'Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Comments made about the referral request by any of the participants.',
		},
		relevantHistory: {
			type: new GraphQLList(GraphQLString),
			description:
				'Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.',
		},
	}),
});
