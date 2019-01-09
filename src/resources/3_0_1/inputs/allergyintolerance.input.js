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
				'This records identifiers associated with this allergy/intolerance concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).',
		},
		_clinicalStatus: {
			type: require('./element.input.js'),
			description: 'The clinical status of the allergy or intolerance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-clinical-status
		clinicalStatus: {
			type: CodeScalar,
			description: 'The clinical status of the allergy or intolerance.',
		},
		_verificationStatus: {
			type: require('./element.input.js'),
			description:
				'Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-verification-status
		verificationStatus: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).',
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
			description: 'Category of the identified substance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-category
		category: {
			type: new GraphQLList(CodeScalar),
			description: 'Category of the identified substance.',
		},
		_criticality: {
			type: require('./element.input.js'),
			description:
				'Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality
		criticality: {
			type: CodeScalar,
			description:
				'Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/allergyintolerance-code
		code: {
			type: require('./codeableconcept.input.js'),
			description:
				"Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., 'Latex'), an allergy or intolerance condition (e.g., 'Latex allergy'), or a negated/excluded code for a specific substance or class (e.g., 'No latex allergy') or a general or categorical negated statement (e.g.,  'No known allergy', 'No known drug allergies').",
		},
		patient: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The patient who has the allergy or intolerance.',
		},
		_onsetDateTime: {
			type: require('./element.input.js'),
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		onsetDateTime: {
			type: DateTimeScalar,
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		onsetAge: {
			type: require('./age.input.js'),
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		onsetPeriod: {
			type: require('./period.input.js'),
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		onsetRange: {
			type: require('./range.input.js'),
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		_onsetString: {
			type: require('./element.input.js'),
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		onsetString: {
			type: GraphQLString,
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		_assertedDate: {
			type: require('./element.input.js'),
			description:
				'The date on which the existance of the AllergyIntolerance was first asserted or acknowledged.',
		},
		assertedDate: {
			type: DateTimeScalar,
			description:
				'The date on which the existance of the AllergyIntolerance was first asserted or acknowledged.',
		},
		recorder: {
			type: GraphQLString,
			description:
				'Individual who recorded the record and takes responsibility for its content.',
		},
		asserter: {
			type: GraphQLString,
			description:
				'The source of the information about the allergy that is recorded.',
		},
		_lastOccurrence: {
			type: require('./element.input.js'),
			description:
				'Represents the date and/or time of the last known occurrence of a reaction event.',
		},
		lastOccurrence: {
			type: DateTimeScalar,
			description:
				'Represents the date and/or time of the last known occurrence of a reaction event.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.',
		},
		reaction: {
			type: new GraphQLList(require('./allergyintolerancereaction.input.js')),
			description:
				'Details about each adverse reaction event linked to exposure to the identified substance.',
		},
	}),
});
