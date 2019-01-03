const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let MedicationStatementResourceType = new GraphQLEnumType({
	name: 'MedicationStatementResourceType',
	values: {
		MedicationStatement: { value: 'MedicationStatement' }
	}
});

/**
 * @name exports
 * @summary MedicationStatement Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationStatement',
	description: 'Base StructureDefinition for MedicationStatement Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(MedicationStatementResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A plan, proposal or order that is fulfilled in whole or in part by this event.'
		},
		partOf: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A larger event of which this particular event is a component or step.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'The encounter or episode of care that establishes the context for this MedicationStatement.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-statement-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code representing the patient or other source\'s judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'A code representing the patient or other source\'s judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-statement-category
		category: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates where type of medication statement and where the medication is expected to be consumed or administered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		medicationReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		effectiveDateTime: {
			type: DateTimeScalar,
			description: 'The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).'
		},
		_effectiveDateTime: {
			type: require('./element.schema'),
			description: 'The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).'
		},
		effectivePeriod: {
			type: require('./period.schema'),
			description: 'The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).'
		},
		dateAsserted: {
			type: DateTimeScalar,
			description: 'The date when the medication statement was asserted by the information source.'
		},
		_dateAsserted: {
			type: require('./element.schema'),
			description: 'The date when the medication statement was asserted by the information source.'
		},
		informationSource: {
			type: require('./reference.schema'),
			description: 'The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g Claim or MedicationRequest.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The person, animal or group who is/was taking the medication.'
		},
		derivedFrom: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-statement-taken
		taken: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicator of the certainty of whether the medication was taken by the patient.'
		},
		_taken: {
			type: require('./element.schema'),
			description: 'Indicator of the certainty of whether the medication was taken by the patient.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/reason-medication-not-taken-codes
		reasonNotTaken: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A code indicating why the medication was not taken.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A reason for why the medication is being/was taken.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Condition or observation that supports why the medication is being/was taken.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Provides extra information about the medication statement that is not conveyed by the other attributes.'
		},
		dosage: {
			type: new GraphQLList(require('./dosage.schema')),
			description: 'Indicates how the medication is/was or should be taken by the patient.'
		}
	})
});
