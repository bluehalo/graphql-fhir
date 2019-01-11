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
 * @summary AllergyIntolerance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AllergyIntolerance_Input',
	description: 'Base StructureDefinition for AllergyIntolerance Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'AllergyIntolerance_Enum_input',
					values: { AllergyIntolerance: { value: 'AllergyIntolerance' } },
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
				'This records identifiers associated with this allergy/intolerance concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).',
		},
		_onset: {
			type: require('./element.input.js'),
			description:
				'Record of the date and/or time of the onset of the Allergy or Intolerance.',
		},
		onset: {
			type: DateTimeScalar,
			description:
				'Record of the date and/or time of the onset of the Allergy or Intolerance.',
		},
		_recordedDate: {
			type: require('./element.input.js'),
			description: 'Date when the sensitivity was recorded.',
		},
		recordedDate: {
			type: DateTimeScalar,
			description: 'Date when the sensitivity was recorded.',
		},
		recorder: {
			type: GraphQLString,
			description:
				'Individual who recorded the record and takes responsibility for its conten.',
		},
		patient: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The patient who has the allergy or intolerance.',
		},
		reporter: {
			type: GraphQLString,
			description:
				'The source of the information about the allergy that is recorded.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergyintolerance-substance-code
		substance: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Identification of a substance, or a class of substances, that is considered to be responsible for the adverse reaction risk.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified Substance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-status
		status: {
			type: CodeScalar,
			description:
				'Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified Substance.',
		},
		_criticality: {
			type: require('./element.input.js'),
			description:
				'Estimate of the potential clinical harm, or seriousness, of the reaction to the identified Substance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality
		criticality: {
			type: CodeScalar,
			description:
				'Estimate of the potential clinical harm, or seriousness, of the reaction to the identified Substance.',
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'Identification of the underlying physiological mechanism for the reaction risk.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-type
		type: {
			type: CodeScalar,
			description:
				'Identification of the underlying physiological mechanism for the reaction risk.',
		},
		_category: {
			type: require('./element.input.js'),
			description: 'Category of the identified Substance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-category
		category: {
			type: CodeScalar,
			description: 'Category of the identified Substance.',
		},
		_lastOccurence: {
			type: require('./element.input.js'),
			description:
				'Represents the date and/or time of the last known occurrence of a reaction event.',
		},
		lastOccurence: {
			type: DateTimeScalar,
			description:
				'Represents the date and/or time of the last known occurrence of a reaction event.',
		},
		note: {
			type: require('./annotation.input.js'),
			description:
				'Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.',
		},
		reaction: {
			type: new GraphQLList(require('./allergyintolerancereaction.input.js')),
			description:
				'Details about each adverse reaction event linked to exposure to the identified Substance.',
		},
	}),
});
