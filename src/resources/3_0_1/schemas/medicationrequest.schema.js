const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let MedicationRequestResourceType = new GraphQLEnumType({
	name: 'MedicationRequestResourceType',
	values: {
		MedicationRequest: { value: 'MedicationRequest' }
	}
});

/**
 * @name exports
 * @summary MedicationRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationRequest',
	description: 'Base StructureDefinition for MedicationRequest Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(MedicationRequestResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'This records identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. For example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records must be tracked through an entire system.'
		},
		definition: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Protocol or definition followed by this request.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A plan or request that is fulfilled in whole or in part by this medication request.'
		},
		groupIdentifier: {
			type: require('./identifier.schema'),
			description: 'A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-request-status
		status: {
			type: CodeScalar,
			description: 'A code specifying the current state of the order.  Generally this will be active or completed state.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'A code specifying the current state of the order.  Generally this will be active or completed state.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-request-intent
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether the request is a proposal, plan, or an original order.'
		},
		_intent: {
			type: require('./element.schema'),
			description: 'Whether the request is a proposal, plan, or an original order.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-request-category
		category: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates the type of medication order and where the medication is expected to be consumed or administered.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-request-priority
		priority: {
			type: CodeScalar,
			description: 'Indicates how quickly the Medication Request should be addressed with respect to other requests.'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'Indicates how quickly the Medication Request should be addressed with respect to other requests.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A link to a resource representing the person or set of individuals to whom the medication will be given.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'A link to an encounter, or episode of care, that identifies the particular occurrence or set occurrences of contact between patient and health care provider.'
		},
		supportingInformation: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Include additional information (for example, patient height and weight) that supports the ordering of the medication.'
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'The date (and perhaps time) when the prescription was initially written or authored on.'
		},
		_authoredOn: {
			type: require('./element.schema'),
			description: 'The date (and perhaps time) when the prescription was initially written or authored on.'
		},
		requester: {
			type: require('./medicationrequestrequester.schema'),
			description: 'The individual, organization or device that initiated the request and has responsibility for its activation.'
		},
		recorder: {
			type: require('./reference.schema'),
			description: 'The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The reason or the indication for ordering the medication.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Condition or observation that supports why the medication was ordered.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Extra information about the prescription that could not be conveyed by the other attributes.'
		},
		dosageInstruction: {
			type: new GraphQLList(require('./dosage.schema')),
			description: 'Indicates how the medication is to be used by the patient.'
		},
		dispenseRequest: {
			type: require('./medicationrequestdispenserequest.schema'),
			description: 'Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.'
		},
		substitution: {
			type: require('./medicationrequestsubstitution.schema'),
			description: 'Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber\'s intent. If nothing is specified substitution may be done.'
		},
		priorPrescription: {
			type: require('./reference.schema'),
			description: 'A link to a resource representing an earlier order related order or prescription.'
		},
		detectedIssue: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.'
		},
		eventHistory: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.'
		}
	})
});
