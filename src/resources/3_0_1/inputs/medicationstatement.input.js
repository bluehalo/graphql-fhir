const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let MedicationStatementResourceInputType = new GraphQLEnumType({
	name: 'MedicationStatementResourceInputType',
	values: {
		MedicationStatement: { value: 'MedicationStatement' }
	}
});

/**
 * @name exports
 * @summary MedicationStatement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationStatement_Input',
	description: 'Base StructureDefinition for MedicationStatement Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(MedicationStatementResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A plan, proposal or order that is fulfilled in whole or in part by this event.'
		},
		partOf: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A larger event of which this particular event is a component or step.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The encounter or episode of care that establishes the context for this MedicationStatement.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-statement-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code representing the patient or other source\'s judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.'
		},
		_status: {
			type: require('./element.input'),
			description: 'A code representing the patient or other source\'s judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-statement-category
		category: {
			type: require('./codeableconcept.input'),
			description: 'Indicates where type of medication statement and where the medication is expected to be consumed or administered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		effectiveDateTime: {
			type: DateTimeScalar,
			description: 'The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).'
		},
		_effectiveDateTime: {
			type: require('./element.input'),
			description: 'The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).'
		},
		effectivePeriod: {
			type: require('./period.input'),
			description: 'The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).'
		},
		dateAsserted: {
			type: DateTimeScalar,
			description: 'The date when the medication statement was asserted by the information source.'
		},
		_dateAsserted: {
			type: require('./element.input'),
			description: 'The date when the medication statement was asserted by the information source.'
		},
		informationSource: {
			type: require('./reference.input'),
			description: 'The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g Claim or MedicationRequest.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The person, animal or group who is/was taking the medication.'
		},
		derivedFrom: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-statement-taken
		taken: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicator of the certainty of whether the medication was taken by the patient.'
		},
		_taken: {
			type: require('./element.input'),
			description: 'Indicator of the certainty of whether the medication was taken by the patient.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/reason-medication-not-taken-codes
		reasonNotTaken: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A code indicating why the medication was not taken.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A reason for why the medication is being/was taken.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Condition or observation that supports why the medication is being/was taken.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Provides extra information about the medication statement that is not conveyed by the other attributes.'
		},
		dosage: {
			type: new GraphQLList(require('./dosage.input')),
			description: 'Indicates how the medication is/was or should be taken by the patient.'
		}
	})
});
