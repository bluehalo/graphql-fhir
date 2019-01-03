const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ConditionResourceType = new GraphQLEnumType({
	name: 'ConditionResourceType',
	values: {
		Condition: { value: 'Condition' }
	}
});

/**
 * @name exports
 * @summary Condition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Condition',
	description: 'Base StructureDefinition for Condition Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ConditionResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-clinical
		clinicalStatus: {
			type: CodeScalar,
			description: 'The clinical status of the condition.'
		},
		_clinicalStatus: {
			type: require('./element.schema'),
			description: 'The clinical status of the condition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-ver-status
		verificationStatus: {
			type: CodeScalar,
			description: 'The verification status to support the clinical status of the condition.'
		},
		_verificationStatus: {
			type: require('./element.schema'),
			description: 'The verification status to support the clinical status of the condition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-category
		category: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A category assigned to the condition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-severity
		severity: {
			type: require('./codeableconcept.schema'),
			description: 'A subjective assessment of the severity of the condition as evaluated by the clinician.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		code: {
			type: require('./codeableconcept.schema'),
			description: 'Identification of the condition, problem or diagnosis.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The anatomical location where this condition manifests itself.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Indicates the patient or group who the condition record is associated with.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'Encounter during which the condition was first asserted.'
		},
		onsetDateTime: {
			type: DateTimeScalar,
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		_onsetDateTime: {
			type: require('./element.schema'),
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		onsetAge: {
			type: require('./age.schema'),
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		onsetPeriod: {
			type: require('./period.schema'),
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		onsetRange: {
			type: require('./range.schema'),
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		onsetString: {
			type: GraphQLString,
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		_onsetString: {
			type: require('./element.schema'),
			description: 'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.'
		},
		abatementDateTime: {
			type: DateTimeScalar,
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		_abatementDateTime: {
			type: require('./element.schema'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		abatementAge: {
			type: require('./age.schema'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		abatementBoolean: {
			type: GraphQLBoolean,
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		_abatementBoolean: {
			type: require('./element.schema'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		abatementPeriod: {
			type: require('./period.schema'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		abatementRange: {
			type: require('./range.schema'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		abatementString: {
			type: GraphQLString,
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		_abatementString: {
			type: require('./element.schema'),
			description: 'The date or estimated date that the condition resolved or went into remission. This is called \'abatement\' because of the many overloaded connotations associated with \'remission\' or \'resolution\' - Conditions are never really resolved, but they can abate.'
		},
		assertedDate: {
			type: DateTimeScalar,
			description: 'The date on which the existance of the Condition was first asserted or acknowledged.'
		},
		_assertedDate: {
			type: require('./element.schema'),
			description: 'The date on which the existance of the Condition was first asserted or acknowledged.'
		},
		asserter: {
			type: require('./reference.schema'),
			description: 'Individual who is making the condition statement.'
		},
		stage: {
			type: require('./conditionstage.schema'),
			description: 'Clinical stage or grade of a condition. May include formal severity assessments.'
		},
		evidence: {
			type: new GraphQLList(require('./conditionevidence.schema')),
			description: 'Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.'
		}
	})
});
