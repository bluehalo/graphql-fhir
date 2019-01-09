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
 * @summary Condition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Condition_Input',
	description:
		'A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Condition_Enum_input',
					values: { Condition: { value: 'Condition' } },
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
				'Business identifiers assigned to this condition by the performer or other systems which remain constant as the resource is updated and propagates from server to server.',
		},
		clinicalStatus: {
			type: require('./codeableconcept.input.js'),
			description: 'The clinical status of the condition.',
		},
		verificationStatus: {
			type: require('./codeableconcept.input.js'),
			description:
				'The verification status to support the clinical status of the condition.',
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'A category assigned to the condition.',
		},
		severity: {
			type: require('./codeableconcept.input.js'),
			description:
				'A subjective assessment of the severity of the condition as evaluated by the clinician.',
		},
		code: {
			type: require('./codeableconcept.input.js'),
			description: 'Identification of the condition, problem or diagnosis.',
		},
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The anatomical location where this condition manifests itself.',
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Indicates the patient or group who the condition record is associated with.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'The Encounter during which this Condition was created or to which the creation of this record is tightly associated.',
		},
		_onsetDateTime: {
			type: require('./element.input.js'),
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		onsetDateTime: {
			type: DateTimeScalar,
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		onsetAge: {
			type: require('./age.input.js'),
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		onsetPeriod: {
			type: require('./period.input.js'),
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		onsetRange: {
			type: require('./range.input.js'),
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		_onsetString: {
			type: require('./element.input.js'),
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		onsetString: {
			type: GraphQLString,
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		_abatementDateTime: {
			type: require('./element.input.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementDateTime: {
			type: DateTimeScalar,
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementAge: {
			type: require('./age.input.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementPeriod: {
			type: require('./period.input.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementRange: {
			type: require('./range.input.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		_abatementString: {
			type: require('./element.input.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementString: {
			type: GraphQLString,
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		_recordedDate: {
			type: require('./element.input.js'),
			description:
				'The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.',
		},
		recordedDate: {
			type: DateTimeScalar,
			description:
				'The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.',
		},
		recorder: {
			type: GraphQLString,
			description:
				'Individual who recorded the record and takes responsibility for its content.',
		},
		asserter: {
			type: GraphQLString,
			description: 'Individual who is making the condition statement.',
		},
		stage: {
			type: new GraphQLList(require('./conditionstage.input.js')),
			description:
				'Clinical stage or grade of a condition. May include formal severity assessments.',
		},
		evidence: {
			type: new GraphQLList(require('./conditionevidence.input.js')),
			description:
				"Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition.",
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.',
		},
	}),
});
