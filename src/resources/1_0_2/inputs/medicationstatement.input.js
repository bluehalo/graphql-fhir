const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary MedicationStatement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationStatement_Input',
	description: 'Base StructureDefinition for MedicationStatement Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MedicationStatement_Enum_input',
					values: { MedicationStatement: { value: 'MedicationStatement' } },
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
				'External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.',
		},
		patient: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The person or animal who is/was taking the medication.',
		},
		informationSource: {
			type: GraphQLString,
			description:
				'The person who provided the information about the taking of this medication.',
		},
		_dateAsserted: {
			type: require('./element.input.js'),
			description:
				'The date when the medication statement was asserted by the information source.',
		},
		dateAsserted: {
			type: DateTimeScalar,
			description:
				'The date when the medication statement was asserted by the information source.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				"A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-statement-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.",
		},
		_wasNotTaken: {
			type: require('./element.input.js'),
			description:
				'Set this to true if the record is saying that the medication was NOT taken.',
		},
		wasNotTaken: {
			type: GraphQLBoolean,
			description:
				'Set this to true if the record is saying that the medication was NOT taken.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/reason-medication-not-given-codes
		reasonNotTaken: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'A code indicating why the medication was not taken.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonForUseCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description: 'A reason for why the medication is being/was taken.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonForUseReference: {
			type: GraphQLString,
			description: 'A reason for why the medication is being/was taken.',
		},
		_effectiveDateTime: {
			type: require('./element.input.js'),
			description:
				'The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).',
		},
		effectiveDateTime: {
			type: DateTimeScalar,
			description:
				'The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).',
		},
		effectivePeriod: {
			type: require('./period.input.js'),
			description:
				'The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).',
		},
		_note: {
			type: require('./element.input.js'),
			description:
				'Provides extra information about the medication statement that is not conveyed by the other attributes.',
		},
		note: {
			type: GraphQLString,
			description:
				'Provides extra information about the medication statement that is not conveyed by the other attributes.',
		},
		supportingInformation: {
			type: new GraphQLList(GraphQLString),
			description:
				'Allows linking the MedicationStatement to the underlying MedicationOrder, or to other information that supports the MedicationStatement.',
		},
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.',
		},
		medicationReference: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.',
		},
		dosage: {
			type: new GraphQLList(require('./medicationstatementdosage.input.js')),
			description: 'Indicates how the medication is/was used by the patient.',
		},
	}),
});
