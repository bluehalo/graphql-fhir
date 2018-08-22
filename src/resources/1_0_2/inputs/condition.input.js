const DateScalar = require('../scalars/date.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ConditionResourceInputType = new GraphQLEnumType({
	name: 'ConditionResourceInputType',
	values: {
		Condition: { value: 'Condition' }
	}
});

/**
 * @name exports
 * @summary Condition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Condition_Input',
	description: 'Base StructureDefinition for Condition Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ConditionResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Indicates the patient who the condition record is associated with.'
		},
		encounter: {
			type: require('./reference.input'),
			description: 'Encounter during which the condition was first asserted.'
		},
		asserter: {
			type: require('./reference.input'),
			description: 'Individual who is making the condition statement.'
		},
		dateRecorded: {
			type: DateScalar,
			description: 'A date, when  the Condition statement was documented.'
		},
		_dateRecorded: {
			type: require('./element.input'),
			description: 'A date, when  the Condition statement was documented.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Identification of the condition, problem or diagnosis.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-category
		category: {
			type: require('./codeableconcept.input'),
			description: 'A category assigned to the condition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-clinical
		clinicalStatus: {
			type: CodeScalar,
			description: 'The clinical status of the condition.'
		},
		_clinicalStatus: {
			type: require('./element.input'),
			description: 'The clinical status of the condition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-ver-status
		verificationStatus: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The verification status to support the clinical status of the condition.'
		},
		_verificationStatus: {
			type: require('./element.input'),
			description: 'The verification status to support the clinical status of the condition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-severity
		severity: {
			type: require('./codeableconcept.input'),
			description: 'A subjective assessment of the severity of the condition as evaluated by the clinician.'
		},
		onsetDateTime: {
			type: DateTimeScalar,
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		_onsetDateTime: {
			type: require('./element.input'),
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		onsetQuantity: {
			type: require('./quantity.input'),
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		onsetPeriod: {
			type: require('./period.input'),
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		onsetRange: {
			type: require('./range.input'),
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		onsetString: {
			type: GraphQLString,
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		_onsetString: {
			type: require('./element.input'),
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		abatementDateTime: {
			type: DateTimeScalar,
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		_abatementDateTime: {
			type: require('./element.input'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		abatementQuantity: {
			type: require('./quantity.input'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		abatementBoolean: {
			type: GraphQLBoolean,
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		_abatementBoolean: {
			type: require('./element.input'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		abatementPeriod: {
			type: require('./period.input'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		abatementRange: {
			type: require('./range.input'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		abatementString: {
			type: GraphQLString,
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		_abatementString: {
			type: require('./element.input'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		stage: {
			type: require('./conditionstage.input'),
			description: 'Clinical stage or grade of a condition. May include formal severity assessments.'
		},
		evidence: {
			type: new GraphQLList(require('./conditionevidence.input')),
			description: 'Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The anatomical location where this condition manifests itself.'
		},
		notes: {
			type: GraphQLString,
			description: 'Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.'
		},
		_notes: {
			type: require('./element.input'),
			description: 'Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.'
		}
	})
});
