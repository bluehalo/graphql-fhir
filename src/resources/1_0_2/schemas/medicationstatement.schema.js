const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary MedicationStatement Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationStatement',
	description: 'Base StructureDefinition for MedicationStatement Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The person or animal who is/was taking the medication.'
		},
		informationSource: {
			type: require('./reference.schema'),
			description: 'The person who provided the information about the taking of this medication.'
		},
		dateAsserted: {
			type: DateTimeScalar,
			description: 'The date when the medication statement was asserted by the information source.'
		},
		_dateAsserted: {
			type: require('./element.schema'),
			description: 'The date when the medication statement was asserted by the information source.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-statement-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code representing the patient or other source\'s judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'A code representing the patient or other source\'s judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.'
		},
		wasNotTaken: {
			type: GraphQLBoolean,
			description: 'Set this to true if the record is saying that the medication was NOT taken.'
		},
		_wasNotTaken: {
			type: require('./element.schema'),
			description: 'Set this to true if the record is saying that the medication was NOT taken.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/reason-medication-not-given-codes
		reasonNotTaken: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A code indicating why the medication was not taken.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonForUseCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'A reason for why the medication is being/was taken.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonForUseReference: {
			type: require('./reference.schema'),
			description: 'A reason for why the medication is being/was taken.'
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
		note: {
			type: GraphQLString,
			description: 'Provides extra information about the medication statement that is not conveyed by the other attributes.'
		},
		_note: {
			type: require('./element.schema'),
			description: 'Provides extra information about the medication statement that is not conveyed by the other attributes.'
		},
		supportingInformation: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Allows linking the MedicationStatement to the underlying MedicationOrder, or to other information that supports the MedicationStatement.'
		},
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		medicationReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		dosage: {
			type: new GraphQLList(require('./medicationstatementdosage.schema')),
			description: 'Indicates how the medication is/was used by the patient.'
		}
	})
});
