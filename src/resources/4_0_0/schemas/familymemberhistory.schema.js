const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary FamilyMemberHistory Schema
 */
module.exports = new GraphQLObjectType({
	name: 'FamilyMemberHistory',
	description:
		'Significant health conditions for a person related to the patient relevant in the context of care for the patient.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'FamilyMemberHistory_Enum_schema',
					values: { FamilyMemberHistory: { value: 'FamilyMemberHistory' } },
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
				'Business identifiers assigned to this family member history by the performer or other systems which remain constant as the resource is updated and propagates from server to server.',
		},
		_instantiatesCanonical: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.',
		},
		instantiatesCanonical: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.',
		},
		_instantiatesUri: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.',
		},
		instantiatesUri: {
			type: new GraphQLList(UriScalar),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'A code specifying the status of the record of the family history of a specific family member.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A code specifying the status of the record of the family history of a specific family member.',
		},
		dataAbsentReason: {
			type: require('./codeableconcept.schema.js'),
			description:
				"Describes why the family member's history is not available.",
		},
		patient: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'FamilyMemberHistorypatient_patient_Union',
					description: 'The person who this history concerns.',
					types: () => [require('./patient.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
					},
				}),
			),
			description: 'The person who this history concerns.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date (and possibly time) when the family member history was recorded or last updated.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date (and possibly time) when the family member history was recorded or last updated.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				"This will either be a name or a description; e.g. 'Aunt Susan', 'my cousin with the red hair'.",
		},
		name: {
			type: GraphQLString,
			description:
				"This will either be a name or a description; e.g. 'Aunt Susan', 'my cousin with the red hair'.",
		},
		relationship: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'The type of relationship this person has to the patient (father, mother, brother etc.).',
		},
		sex: {
			type: require('./codeableconcept.schema.js'),
			description: 'The birth sex of the family member.',
		},
		bornPeriod: {
			type: require('./period.schema.js'),
			description: 'The actual or approximate date of birth of the relative.',
		},
		_bornDate: {
			type: require('./element.schema.js'),
			description: 'The actual or approximate date of birth of the relative.',
		},
		bornDate: {
			type: DateScalar,
			description: 'The actual or approximate date of birth of the relative.',
		},
		_bornString: {
			type: require('./element.schema.js'),
			description: 'The actual or approximate date of birth of the relative.',
		},
		bornString: {
			type: GraphQLString,
			description: 'The actual or approximate date of birth of the relative.',
		},
		ageAge: {
			type: require('./age.schema.js'),
			description:
				'The age of the relative at the time the family member history is recorded.',
		},
		ageRange: {
			type: require('./range.schema.js'),
			description:
				'The age of the relative at the time the family member history is recorded.',
		},
		_ageString: {
			type: require('./element.schema.js'),
			description:
				'The age of the relative at the time the family member history is recorded.',
		},
		ageString: {
			type: GraphQLString,
			description:
				'The age of the relative at the time the family member history is recorded.',
		},
		_estimatedAge: {
			type: require('./element.schema.js'),
			description:
				'If true, indicates that the age value specified is an estimated value.',
		},
		estimatedAge: {
			type: GraphQLBoolean,
			description:
				'If true, indicates that the age value specified is an estimated value.',
		},
		_deceasedBoolean: {
			type: require('./element.schema.js'),
			description:
				'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.',
		},
		deceasedBoolean: {
			type: GraphQLBoolean,
			description:
				'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.',
		},
		deceasedAge: {
			type: require('./age.schema.js'),
			description:
				'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.',
		},
		deceasedRange: {
			type: require('./range.schema.js'),
			description:
				'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.',
		},
		_deceasedDate: {
			type: require('./element.schema.js'),
			description:
				'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.',
		},
		deceasedDate: {
			type: DateScalar,
			description:
				'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.',
		},
		_deceasedString: {
			type: require('./element.schema.js'),
			description:
				'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.',
		},
		deceasedString: {
			type: GraphQLString,
			description:
				'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Describes why the family member history occurred in coded or textual form.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'FamilyMemberHistoryreasonReference_reasonReference_Union',
					description:
						'Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.',
					types: () => [
						require('./condition.schema.js'),
						require('./observation.schema.js'),
						require('./allergyintolerance.schema.js'),
						require('./questionnaireresponse.schema.js'),
						require('./diagnosticreport.schema.js'),
						require('./documentreference.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'AllergyIntolerance') {
							return require('./allergyintolerance.schema.js');
						}
						if (data && data.resourceType === 'QuestionnaireResponse') {
							return require('./questionnaireresponse.schema.js');
						}
						if (data && data.resourceType === 'DiagnosticReport') {
							return require('./diagnosticreport.schema.js');
						}
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
					},
				}),
			),
			description:
				'Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.',
		},
		condition: {
			type: new GraphQLList(
				require('./familymemberhistorycondition.schema.js'),
			),
			description:
				'The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.',
		},
	}),
});
