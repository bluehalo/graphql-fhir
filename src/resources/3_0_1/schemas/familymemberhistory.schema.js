const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let FamilyMemberHistoryResourceType = new GraphQLEnumType({
	name: 'FamilyMemberHistoryResourceType',
	values: {
		FamilyMemberHistory: { value: 'FamilyMemberHistory' }
	}
});

/**
 * @name exports
 * @summary FamilyMemberHistory Schema
 */
module.exports = new GraphQLObjectType({
	name: 'FamilyMemberHistory',
	description: 'Base StructureDefinition for FamilyMemberHistory Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(FamilyMemberHistoryResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'This records identifiers associated with this family member history record that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		definition: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A protocol or questionnaire that was adhered to in whole or in part by this event.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/history-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code specifying the status of the record of the family history of a specific family member.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'A code specifying the status of the record of the family history of a specific family member.'
		},
		notDone: {
			type: GraphQLBoolean,
			description: 'If true, indicates the taking of an individual family member\'s history did not occur. The notDone element should not be used to document negated conditions, such as a family member that did not have a condition.'
		},
		_notDone: {
			type: require('./element.schema'),
			description: 'If true, indicates the taking of an individual family member\'s history did not occur. The notDone element should not be used to document negated conditions, such as a family member that did not have a condition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/history-not-done-reason
		notDoneReason: {
			type: require('./codeableconcept.schema'),
			description: 'Describes why the family member\'s history is absent.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The person who this history concerns.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date (and possibly time) when the family member history was taken.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date (and possibly time) when the family member history was taken.'
		},
		name: {
			type: GraphQLString,
			description: 'This will either be a name or a description; e.g. \'Aunt Susan\', \'my cousin with the red hair\'.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'This will either be a name or a description; e.g. \'Aunt Susan\', \'my cousin with the red hair\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-FamilyMember
		relationship: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The type of relationship this person has to the patient (father, mother, brother etc.).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description: 'Administrative Gender - the gender that the relative is considered to have for administration and record keeping purposes.'
		},
		_gender: {
			type: require('./element.schema'),
			description: 'Administrative Gender - the gender that the relative is considered to have for administration and record keeping purposes.'
		},
		bornPeriod: {
			type: require('./period.schema'),
			description: 'The actual or approximate date of birth of the relative.'
		},
		bornDate: {
			type: DateScalar,
			description: 'The actual or approximate date of birth of the relative.'
		},
		_bornDate: {
			type: require('./element.schema'),
			description: 'The actual or approximate date of birth of the relative.'
		},
		bornString: {
			type: GraphQLString,
			description: 'The actual or approximate date of birth of the relative.'
		},
		_bornString: {
			type: require('./element.schema'),
			description: 'The actual or approximate date of birth of the relative.'
		},
		ageAge: {
			type: require('./age.schema'),
			description: 'The age of the relative at the time the family member history is recorded.'
		},
		ageRange: {
			type: require('./range.schema'),
			description: 'The age of the relative at the time the family member history is recorded.'
		},
		ageString: {
			type: GraphQLString,
			description: 'The age of the relative at the time the family member history is recorded.'
		},
		_ageString: {
			type: require('./element.schema'),
			description: 'The age of the relative at the time the family member history is recorded.'
		},
		estimatedAge: {
			type: GraphQLBoolean,
			description: 'If true, indicates that the age value specified is an estimated value.'
		},
		_estimatedAge: {
			type: require('./element.schema'),
			description: 'If true, indicates that the age value specified is an estimated value.'
		},
		deceasedBoolean: {
			type: GraphQLBoolean,
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		_deceasedBoolean: {
			type: require('./element.schema'),
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		deceasedAge: {
			type: require('./age.schema'),
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		deceasedRange: {
			type: require('./range.schema'),
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		deceasedDate: {
			type: DateScalar,
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		_deceasedDate: {
			type: require('./element.schema'),
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		deceasedString: {
			type: GraphQLString,
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		_deceasedString: {
			type: require('./element.schema'),
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Describes why the family member history occurred in coded or textual form.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.'
		},
		condition: {
			type: new GraphQLList(require('./familymemberhistorycondition.schema')),
			description: 'The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.'
		}
	})
});
