const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/dateTime.scalar.js');

/**
 * @name exports
 * @summary AllergyIntolerance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AllergyIntolerance',
	description:
		'Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'AllergyIntolerance_Enum_schema',
					values: { AllergyIntolerance: { value: 'AllergyIntolerance' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Business identifiers assigned to this AllergyIntolerance by the performer or other systems which remain constant as the resource is updated and propagates from server to server.',
		},
		clinicalStatus: {
			type: require('./codeableconcept.schema.js'),
			description: 'The clinical status of the allergy or intolerance.',
		},
		verificationStatus: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).',
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'Identification of the underlying physiological mechanism for the reaction risk.',
		},
		type: {
			type: CodeScalar,
			description:
				'Identification of the underlying physiological mechanism for the reaction risk.',
		},
		_category: {
			type: require('./element.schema.js'),
			description: 'Category of the identified substance.',
		},
		category: {
			type: new GraphQLList(CodeScalar),
			description: 'Category of the identified substance.',
		},
		_criticality: {
			type: require('./element.schema.js'),
			description:
				'Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.',
		},
		criticality: {
			type: CodeScalar,
			description:
				'Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				"Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., 'Latex'), an allergy or intolerance condition (e.g., 'Latex allergy'), or a negated/excluded code for a specific substance or class (e.g., 'No latex allergy') or a general or categorical negated statement (e.g.,  'No known allergy', 'No known drug allergies').  Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.",
		},
		patient: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'AllergyIntolerancepatient_patient_Union',
					description: 'The patient who has the allergy or intolerance.',
					types: () => [require('./patient.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
					},
				}),
			),
			description: 'The patient who has the allergy or intolerance.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'AllergyIntoleranceencounter_encounter_Union',
				description:
					'The encounter when the allergy or intolerance was asserted.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The encounter when the allergy or intolerance was asserted.',
		},
		_onsetDateTime: {
			type: require('./element.schema.js'),
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		onsetDateTime: {
			type: DateTimeScalar,
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		onsetAge: {
			type: require('./age.schema.js'),
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		onsetPeriod: {
			type: require('./period.schema.js'),
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		onsetRange: {
			type: require('./range.schema.js'),
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		_onsetString: {
			type: require('./element.schema.js'),
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		onsetString: {
			type: GraphQLString,
			description:
				'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.',
		},
		_recordedDate: {
			type: require('./element.schema.js'),
			description:
				'The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.',
		},
		recordedDate: {
			type: DateTimeScalar,
			description:
				'The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.',
		},
		recorder: {
			type: new GraphQLUnionType({
				name: 'AllergyIntolerancerecorder_recorder_Union',
				description:
					'Individual who recorded the record and takes responsibility for its content.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description:
				'Individual who recorded the record and takes responsibility for its content.',
		},
		asserter: {
			type: new GraphQLUnionType({
				name: 'AllergyIntoleranceasserter_asserter_Union',
				description:
					'The source of the information about the allergy that is recorded.',
				types: () => [
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description:
				'The source of the information about the allergy that is recorded.',
		},
		_lastOccurrence: {
			type: require('./element.schema.js'),
			description:
				'Represents the date and/or time of the last known occurrence of a reaction event.',
		},
		lastOccurrence: {
			type: DateTimeScalar,
			description:
				'Represents the date and/or time of the last known occurrence of a reaction event.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.',
		},
		reaction: {
			type: new GraphQLList(require('./allergyintolerancereaction.schema.js')),
			description:
				'Details about each adverse reaction event linked to exposure to the identified substance.',
		},
	}),
});
