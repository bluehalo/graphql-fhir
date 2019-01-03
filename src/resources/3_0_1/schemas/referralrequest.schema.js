const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ReferralRequestResourceType = new GraphQLEnumType({
	name: 'ReferralRequestResourceType',
	values: {
		ReferralRequest: { value: 'ReferralRequest' }
	}
});

/**
 * @name exports
 * @summary ReferralRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ReferralRequest',
	description: 'Base StructureDefinition for ReferralRequest Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ReferralRequestResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Business identifier that uniquely identifies the referral/care transfer request instance.'
		},
		definition: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Indicates any plans, proposals or orders that this request is intended to satisfy - in whole or in part.'
		},
		replaces: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Completed or terminated request(s) whose function is taken by this new request.'
		},
		groupIdentifier: {
			type: require('./identifier.schema'),
			description: 'The business identifier of the logical \'grouping\' request/order that this referral is a part of.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the authorization/intention reflected by the referral request record.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the authorization/intention reflected by the referral request record.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-intent
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Distinguishes the \'level\' of authorization/demand implicit in this request.'
		},
		_intent: {
			type: require('./element.schema'),
			description: 'Distinguishes the \'level\' of authorization/demand implicit in this request.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/referral-type
		type: {
			type: require('./codeableconcept.schema'),
			description: 'An indication of the type of referral (or where applicable the type of transfer of care) request.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description: 'An indication of the urgency of referral (or where applicable the type of transfer of care) request.'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'An indication of the urgency of referral (or where applicable the type of transfer of care) request.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		serviceRequested: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient who is the subject of a referral or transfer of care request.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'The encounter at which the request for referral or transfer of care is initiated.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The period of time within which the services identified in the referral/transfer of care is specified or required to occur.'
		},
		_occurrenceDateTime: {
			type: require('./element.schema'),
			description: 'The period of time within which the services identified in the referral/transfer of care is specified or required to occur.'
		},
		occurrencePeriod: {
			type: require('./period.schema'),
			description: 'The period of time within which the services identified in the referral/transfer of care is specified or required to occur.'
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'Date/DateTime of creation for draft requests and date of activation for active requests.'
		},
		_authoredOn: {
			type: require('./element.schema'),
			description: 'Date/DateTime of creation for draft requests and date of activation for active requests.'
		},
		requester: {
			type: require('./referralrequestrequester.schema'),
			description: 'The individual who initiated the request and has responsibility for its activation.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/practitioner-specialty
		specialty: {
			type: require('./codeableconcept.schema'),
			description: 'Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.'
		},
		recipient: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Indicates another resource whose existence justifies this request.'
		},
		description: {
			type: GraphQLString,
			description: 'The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.'
		},
		supportingInfo: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Comments made about the referral request by any of the participants.'
		},
		relevantHistory: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.'
		}
	})
});
