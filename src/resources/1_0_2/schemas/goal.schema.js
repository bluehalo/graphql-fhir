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
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary Goal Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Goal',
	description: 'Base StructureDefinition for Goal Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Goal_Enum_schema',
					values: { Goal: { value: 'Goal' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
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
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'Goalsubject_subject_Union',
				description:
					'Identifies the patient, group or organization for whom the goal is being established.',
				types: () => [
					require('./patient.schema.js'),
					require('./group.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'Identifies the patient, group or organization for whom the goal is being established.',
		},
		_startDate: {
			type: require('./element.schema.js'),
			description:
				'The date or event after which the goal should begin being pursued.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/goal-start-event
		startDate: {
			type: DateScalar,
			description:
				'The date or event after which the goal should begin being pursued.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/goal-start-event
		startCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The date or event after which the goal should begin being pursued.',
		},
		_targetDate: {
			type: require('./element.schema.js'),
			description:
				'Indicates either the date or the duration after start by which the goal should be met.',
		},
		targetDate: {
			type: DateScalar,
			description:
				'Indicates either the date or the duration after start by which the goal should be met.',
		},
		targetQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'Indicates either the date or the duration after start by which the goal should be met.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/goal-category
		category: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Indicates a category the goal falls within.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'Human-readable description of a specific desired objective of care.',
		},
		description: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Human-readable description of a specific desired objective of care.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether the goal has been reached and is still considered relevant.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/goal-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates whether the goal has been reached and is still considered relevant.',
		},
		_statusDate: {
			type: require('./element.schema.js'),
			description:
				'Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.',
		},
		statusDate: {
			type: DateScalar,
			description:
				'Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/goal-status-reason
		statusReason: {
			type: require('./codeableconcept.schema.js'),
			description: 'Captures the reason for the current status.',
		},
		author: {
			type: new GraphQLUnionType({
				name: 'Goalauthor_author_Union',
				description:
					'Indicates whose goal this is - patient goal, practitioner goal, etc.',
				types: () => [
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description:
				'Indicates whose goal this is - patient goal, practitioner goal, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/goal-priority
		priority: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.',
		},
		addresses: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Goaladdresses_addresses_Union',
					description:
						'The identified conditions and other health record elements that are intended to be addressed by the goal.',
					types: () => [
						require('./condition.schema.js'),
						require('./observation.schema.js'),
						require('./medicationstatement.schema.js'),
						require('./nutritionorder.schema.js'),
						require('./procedurerequest.schema.js'),
						require('./riskassessment.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'MedicationStatement') {
							return require('./medicationstatement.schema.js');
						}
						if (data && data.resourceType === 'NutritionOrder') {
							return require('./nutritionorder.schema.js');
						}
						if (data && data.resourceType === 'ProcedureRequest') {
							return require('./procedurerequest.schema.js');
						}
						if (data && data.resourceType === 'RiskAssessment') {
							return require('./riskassessment.schema.js');
						}
					},
				}),
			),
			description:
				'The identified conditions and other health record elements that are intended to be addressed by the goal.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description: 'Any comments related to the goal.',
		},
		outcome: {
			type: new GraphQLList(require('./goaloutcome.schema.js')),
			description:
				'Identifies the change (or lack of change) at the point where the goal was deepmed to be cancelled or achieved.',
		},
	}),
});
