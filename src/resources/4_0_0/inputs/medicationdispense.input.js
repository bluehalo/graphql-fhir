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
 * @summary MedicationDispense Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationDispense_Input',
	description:
		'Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MedicationDispense_Enum_input',
					values: { MedicationDispense: { value: 'MedicationDispense' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
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
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Identifiers associated with this Medication Dispense that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server.',
		},
		partOf: {
			type: new GraphQLList(GraphQLString),
			description: 'The procedure that trigger the dispense.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'A code specifying the state of the set of dispense events.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code specifying the state of the set of dispense events.',
		},
		statusReasonCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description: 'Indicates the reason why a dispense was not performed.',
		},
		statusReasonReference: {
			type: GraphQLString,
			description: 'Indicates the reason why a dispense was not performed.',
		},
		category: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indicates the type of medication dispense (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)).',
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
		subject: {
			type: GraphQLString,
			description:
				'A link to a resource representing the person or the group to whom the medication will be given.',
		},
		context: {
			type: GraphQLString,
			description:
				'The encounter or episode of care that establishes the context for this event.',
		},
		supportingInformation: {
			type: new GraphQLList(GraphQLString),
			description:
				'Additional information that supports the medication being dispensed.',
		},
		performer: {
			type: new GraphQLList(require('./medicationdispenseperformer.input.js')),
			description: 'Indicates who or what performed the event.',
		},
		location: {
			type: GraphQLString,
			description:
				'The principal physical location where the dispense was performed.',
		},
		authorizingPrescription: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates the medication order that is being dispensed against.',
		},
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.',
		},
		quantity: {
			type: require('./quantity.input.js'),
			description:
				'The amount of medication that has been dispensed. Includes unit of measure.',
		},
		daysSupply: {
			type: require('./quantity.input.js'),
			description: 'The amount of medication expressed as a timing amount.',
		},
		_whenPrepared: {
			type: require('./element.input.js'),
			description:
				'The time when the dispensed product was packaged and reviewed.',
		},
		whenPrepared: {
			type: DateTimeScalar,
			description:
				'The time when the dispensed product was packaged and reviewed.',
		},
		_whenHandedOver: {
			type: require('./element.input.js'),
			description:
				'The time the dispensed product was provided to the patient or their representative.',
		},
		whenHandedOver: {
			type: DateTimeScalar,
			description:
				'The time the dispensed product was provided to the patient or their representative.',
		},
		destination: {
			type: GraphQLString,
			description:
				'Identification of the facility/location where the medication was shipped to, as part of the dispense event.',
		},
		receiver: {
			type: new GraphQLList(GraphQLString),
			description:
				'Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Extra information about the dispense that could not be conveyed in the other attributes.',
		},
		dosageInstruction: {
			type: new GraphQLList(require('./dosage.input.js')),
			description: 'Indicates how the medication is to be used by the patient.',
		},
		substitution: {
			type: require('./medicationdispensesubstitution.input.js'),
			description:
				'Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.',
		},
		detectedIssue: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. drug-drug interaction, duplicate therapy, dosage alert etc.',
		},
		eventHistory: {
			type: new GraphQLList(GraphQLString),
			description:
				'A summary of the events of interest that have occurred, such as when the dispense was verified.',
		},
	}),
});
