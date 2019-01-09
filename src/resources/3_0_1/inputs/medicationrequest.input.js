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
 * @summary MedicationRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationRequest_Input',
	description: 'Base StructureDefinition for MedicationRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MedicationRequest_Enum_input',
					values: { MedicationRequest: { value: 'MedicationRequest' } },
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
				'This records identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. For example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records must be tracked through an entire system.',
		},
		definition: {
			type: new GraphQLList(GraphQLString),
			description: 'Protocol or definition followed by this request.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description:
				'A plan or request that is fulfilled in whole or in part by this medication request.',
		},
		groupIdentifier: {
			type: require('./identifier.input.js'),
			description:
				'A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'A code specifying the current state of the order.  Generally this will be active or completed state.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-request-status
		status: {
			type: CodeScalar,
			description:
				'A code specifying the current state of the order.  Generally this will be active or completed state.',
		},
		_intent: {
			type: require('./element.input.js'),
			description:
				'Whether the request is a proposal, plan, or an original order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-request-intent
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Whether the request is a proposal, plan, or an original order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-request-category
		category: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indicates the type of medication order and where the medication is expected to be consumed or administered.',
		},
		_priority: {
			type: require('./element.input.js'),
			description:
				'Indicates how quickly the Medication Request should be addressed with respect to other requests.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-request-priority
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly the Medication Request should be addressed with respect to other requests.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationReference: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.',
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A link to a resource representing the person or set of individuals to whom the medication will be given.',
		},
		context: {
			type: GraphQLString,
			description:
				'A link to an encounter, or episode of care, that identifies the particular occurrence or set occurrences of contact between patient and health care provider.',
		},
		supportingInformation: {
			type: new GraphQLList(GraphQLString),
			description:
				'Include additional information (for example, patient height and weight) that supports the ordering of the medication.',
		},
		_authoredOn: {
			type: require('./element.input.js'),
			description:
				'The date (and perhaps time) when the prescription was initially written or authored on.',
		},
		authoredOn: {
			type: DateTimeScalar,
			description:
				'The date (and perhaps time) when the prescription was initially written or authored on.',
		},
		requester: {
			type: require('./medicationrequestrequester.input.js'),
			description:
				'The individual, organization or device that initiated the request and has responsibility for its activation.',
		},
		recorder: {
			type: GraphQLString,
			description:
				'The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'The reason or the indication for ordering the medication.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description:
				'Condition or observation that supports why the medication was ordered.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Extra information about the prescription that could not be conveyed by the other attributes.',
		},
		dosageInstruction: {
			type: new GraphQLList(require('./dosage.input.js')),
			description: 'Indicates how the medication is to be used by the patient.',
		},
		dispenseRequest: {
			type: require('./medicationrequestdispenserequest.input.js'),
			description:
				'Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.',
		},
		substitution: {
			type: require('./medicationrequestsubstitution.input.js'),
			description:
				"Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.",
		},
		priorPrescription: {
			type: GraphQLString,
			description:
				'A link to a resource representing an earlier order related order or prescription.',
		},
		detectedIssue: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.',
		},
		eventHistory: {
			type: new GraphQLList(GraphQLString),
			description:
				'Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.',
		},
	}),
});
