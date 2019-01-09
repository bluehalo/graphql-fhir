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
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary CarePlan Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CarePlan',
	description:
		'Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'CarePlan_Enum_schema',
					values: { CarePlan: { value: 'CarePlan' } },
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
				'Business identifiers assigned to this care plan by the performer or other systems which remain constant as the resource is updated and propagates from server to server.',
		},
		_instantiatesCanonical: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.',
		},
		instantiatesCanonical: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.',
		},
		_instantiatesUri: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.',
		},
		instantiatesUri: {
			type: new GraphQLList(UriScalar),
			description:
				'The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlanbasedOn_basedOn_Union',
					description:
						'A care plan that is fulfilled in whole or in part by this care plan.',
					types: () => [require('./careplan.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'CarePlan') {
							return require('./careplan.schema.js');
						}
					},
				}),
			),
			description:
				'A care plan that is fulfilled in whole or in part by this care plan.',
		},
		replaces: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlanreplaces_replaces_Union',
					description:
						'Completed or terminated care plan whose function is taken by this new care plan.',
					types: () => [require('./careplan.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'CarePlan') {
							return require('./careplan.schema.js');
						}
					},
				}),
			),
			description:
				'Completed or terminated care plan whose function is taken by this new care plan.',
		},
		partOf: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlanpartOf_partOf_Union',
					description:
						'A larger care plan of which this particular care plan is a component or step.',
					types: () => [require('./careplan.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'CarePlan') {
							return require('./careplan.schema.js');
						}
					},
				}),
			),
			description:
				'A larger care plan of which this particular care plan is a component or step.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.',
		},
		_intent: {
			type: require('./element.schema.js'),
			description:
				'Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.',
		},
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.',
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				"Identifies what 'kind' of plan this is to support differentiation between multiple co-existing plans; e.g. 'Home health', 'psychiatric', 'asthma', 'disease management', 'wellness plan', etc.",
		},
		_title: {
			type: require('./element.schema.js'),
			description: 'Human-friendly name for the care plan.',
		},
		title: {
			type: GraphQLString,
			description: 'Human-friendly name for the care plan.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'A description of the scope and nature of the plan.',
		},
		description: {
			type: GraphQLString,
			description: 'A description of the scope and nature of the plan.',
		},
		subject: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CarePlansubject_subject_Union',
					description:
						'Identifies the patient or group whose intended care is described by the plan.',
					types: () => [
						require('./patient.schema.js'),
						require('./group.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
					},
				}),
			),
			description:
				'Identifies the patient or group whose intended care is described by the plan.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'CarePlanencounter_encounter_Union',
				description:
					'The Encounter during which this CarePlan was created or to which the creation of this record is tightly associated.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The Encounter during which this CarePlan was created or to which the creation of this record is tightly associated.',
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'Indicates when the plan did (or is intended to) come into effect and end.',
		},
		_created: {
			type: require('./element.schema.js'),
			description:
				'Represents when this particular CarePlan record was created in the system, which is often a system-generated date.',
		},
		created: {
			type: DateTimeScalar,
			description:
				'Represents when this particular CarePlan record was created in the system, which is often a system-generated date.',
		},
		author: {
			type: new GraphQLUnionType({
				name: 'CarePlanauthor_author_Union',
				description:
					'When populated, the author is responsible for the care plan.  The care plan is attributed to the author.',
				types: () => [
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./device.schema.js'),
					require('./relatedperson.schema.js'),
					require('./organization.schema.js'),
					require('./careteam.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'CareTeam') {
						return require('./careteam.schema.js');
					}
				},
			}),
			description:
				'When populated, the author is responsible for the care plan.  The care plan is attributed to the author.',
		},
		contributor: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlancontributor_contributor_Union',
					description:
						'Identifies the individual(s) or organization who provided the contents of the care plan.',
					types: () => [
						require('./patient.schema.js'),
						require('./practitioner.schema.js'),
						require('./practitionerrole.schema.js'),
						require('./device.schema.js'),
						require('./relatedperson.schema.js'),
						require('./organization.schema.js'),
						require('./careteam.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'PractitionerRole') {
							return require('./practitionerrole.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
						if (data && data.resourceType === 'RelatedPerson') {
							return require('./relatedperson.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
						if (data && data.resourceType === 'CareTeam') {
							return require('./careteam.schema.js');
						}
					},
				}),
			),
			description:
				'Identifies the individual(s) or organization who provided the contents of the care plan.',
		},
		careTeam: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlancareTeam_careTeam_Union',
					description:
						'Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.',
					types: () => [require('./careteam.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'CareTeam') {
							return require('./careteam.schema.js');
						}
					},
				}),
			),
			description:
				'Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.',
		},
		addresses: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlanaddresses_addresses_Union',
					description:
						'Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.',
					types: () => [require('./condition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
					},
				}),
			),
			description:
				'Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.',
		},
		supportingInfo: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlansupportingInfo_supportingInfo_Union',
					description:
						"Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include comorbidities, recent procedures, limitations, recent assessments, etc.",
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				"Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include comorbidities, recent procedures, limitations, recent assessments, etc.",
		},
		goal: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlangoal_goal_Union',
					description:
						'Describes the intended objective(s) of carrying out the care plan.',
					types: () => [require('./goal.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Goal') {
							return require('./goal.schema.js');
						}
					},
				}),
			),
			description:
				'Describes the intended objective(s) of carrying out the care plan.',
		},
		activity: {
			type: new GraphQLList(require('./careplanactivity.schema.js')),
			description:
				'Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description: 'General notes about the care plan not covered elsewhere.',
		},
	}),
});
