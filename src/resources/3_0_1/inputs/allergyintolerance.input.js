const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let AllergyIntoleranceResourceInputType = new GraphQLEnumType({
	name: 'AllergyIntoleranceResourceInputType',
	values: {
		AllergyIntolerance: { value: 'AllergyIntolerance' }
	}
});

/**
 * @name exports
 * @summary AllergyIntolerance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AllergyIntolerance_Input',
	description: 'Base StructureDefinition for AllergyIntolerance Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(AllergyIntoleranceResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'This records identifiers associated with this allergy/intolerance concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/allergy-clinical-status
		clinicalStatus: {
			type: CodeScalar,
			description: 'The clinical status of the allergy or intolerance.'
		},
		_clinicalStatus: {
			type: require('./element.input'),
			description: 'The clinical status of the allergy or intolerance.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/allergy-verification-status
		verificationStatus: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).'
		},
		_verificationStatus: {
			type: require('./element.input'),
			description: 'Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-type
		type: {
			type: CodeScalar,
			description: 'Identification of the underlying physiological mechanism for the reaction risk.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Identification of the underlying physiological mechanism for the reaction risk.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-category
		category: {
			type: new GraphQLList(CodeScalar),
			description: 'Category of the identified substance.'
		},
		_category: {
			type: require('./element.input'),
			description: 'Category of the identified substance.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality
		criticality: {
			type: CodeScalar,
			description: 'Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.'
		},
		_criticality: {
			type: require('./element.input'),
			description: 'Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/allergyintolerance-code
		code: {
			type: require('./codeableconcept.input'),
			description: 'Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., \'Latex\'), an allergy or intolerance condition (e.g., \'Latex allergy\'), or a negated/excluded code for a specific substance or class (e.g., \'No latex allergy\') or a general or categorical negated statement (e.g.,  \'No known allergy\', \'No known drug allergies\').'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The patient who has the allergy or intolerance.'
		},
		onsetDateTime: {
			type: DateTimeScalar,
			description: 'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.'
		},
		_onsetDateTime: {
			type: require('./element.input'),
			description: 'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.'
		},
		onsetAge: {
			type: require('./age.input'),
			description: 'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.'
		},
		onsetPeriod: {
			type: require('./period.input'),
			description: 'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.'
		},
		onsetRange: {
			type: require('./range.input'),
			description: 'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.'
		},
		onsetString: {
			type: GraphQLString,
			description: 'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.'
		},
		_onsetString: {
			type: require('./element.input'),
			description: 'Estimated or actual date,  date-time, or age when allergy or intolerance was identified.'
		},
		assertedDate: {
			type: DateTimeScalar,
			description: 'The date on which the existance of the AllergyIntolerance was first asserted or acknowledged.'
		},
		_assertedDate: {
			type: require('./element.input'),
			description: 'The date on which the existance of the AllergyIntolerance was first asserted or acknowledged.'
		},
		recorder: {
			type: require('./reference.input'),
			description: 'Individual who recorded the record and takes responsibility for its content.'
		},
		asserter: {
			type: require('./reference.input'),
			description: 'The source of the information about the allergy that is recorded.'
		},
		lastOccurrence: {
			type: DateTimeScalar,
			description: 'Represents the date and/or time of the last known occurrence of a reaction event.'
		},
		_lastOccurrence: {
			type: require('./element.input'),
			description: 'Represents the date and/or time of the last known occurrence of a reaction event.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.'
		},
		reaction: {
			type: new GraphQLList(require('./allergyintolerancereaction.input')),
			description: 'Details about each adverse reaction event linked to exposure to the identified substance.'
		}
	})
});
