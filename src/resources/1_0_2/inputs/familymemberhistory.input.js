const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let FamilyMemberHistoryResourceInputType = new GraphQLEnumType({
	name: 'FamilyMemberHistoryResourceInputType',
	values: {
		FamilyMemberHistory: { value: 'FamilyMemberHistory' }
	}
});

/**
 * @name exports
 * @summary FamilyMemberHistory Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'FamilyMemberHistory_Input',
	description: 'Base StructureDefinition for FamilyMemberHistory Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(FamilyMemberHistoryResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'This records identifiers associated with this family member history record that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The person who this history concerns.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date (and possibly time) when the family member history was taken.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date (and possibly time) when the family member history was taken.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/history-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code specifying a state of a Family Member History record.'
		},
		_status: {
			type: require('./element.input'),
			description: 'A code specifying a state of a Family Member History record.'
		},
		name: {
			type: GraphQLString,
			description: 'This will either be a name or a description; e.g. \'Aunt Susan\', \'my cousin with the red hair\'.'
		},
		_name: {
			type: require('./element.input'),
			description: 'This will either be a name or a description; e.g. \'Aunt Susan\', \'my cousin with the red hair\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-FamilyMember
		relationship: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'The type of relationship this person has to the patient (father, mother, brother etc.).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description: 'Administrative Gender - the gender that the relative is considered to have for administration and record keeping purposes.'
		},
		_gender: {
			type: require('./element.input'),
			description: 'Administrative Gender - the gender that the relative is considered to have for administration and record keeping purposes.'
		},
		bornPeriod: {
			type: require('./period.input'),
			description: 'The actual or approximate date of birth of the relative.'
		},
		bornDate: {
			type: DateScalar,
			description: 'The actual or approximate date of birth of the relative.'
		},
		_bornDate: {
			type: require('./element.input'),
			description: 'The actual or approximate date of birth of the relative.'
		},
		bornString: {
			type: GraphQLString,
			description: 'The actual or approximate date of birth of the relative.'
		},
		_bornString: {
			type: require('./element.input'),
			description: 'The actual or approximate date of birth of the relative.'
		},
		ageQuantity: {
			type: require('./quantity.input'),
			description: 'The actual or approximate age of the relative at the time the family member history is recorded.'
		},
		ageRange: {
			type: require('./range.input'),
			description: 'The actual or approximate age of the relative at the time the family member history is recorded.'
		},
		ageString: {
			type: GraphQLString,
			description: 'The actual or approximate age of the relative at the time the family member history is recorded.'
		},
		_ageString: {
			type: require('./element.input'),
			description: 'The actual or approximate age of the relative at the time the family member history is recorded.'
		},
		deceasedBoolean: {
			type: GraphQLBoolean,
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		_deceasedBoolean: {
			type: require('./element.input'),
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		deceasedQuantity: {
			type: require('./quantity.input'),
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		deceasedRange: {
			type: require('./range.input'),
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		deceasedDate: {
			type: DateScalar,
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		_deceasedDate: {
			type: require('./element.input'),
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		deceasedString: {
			type: GraphQLString,
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		_deceasedString: {
			type: require('./element.input'),
			description: 'Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.'
		},
		note: {
			type: require('./annotation.input'),
			description: 'This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.'
		},
		condition: {
			type: new GraphQLList(require('./familymemberhistorycondition.input')),
			description: 'The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.'
		}
	})
});
