const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary GuidanceResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'GuidanceResponse',
	description:
		'A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'GuidanceResponse_Enum_schema',
					values: { GuidanceResponse: { value: 'GuidanceResponse' } },
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
		requestIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				'The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Allows a service to provide  unique, business identifiers for the response.',
		},
		_moduleUri: {
			type: require('./element.schema.js'),
			description:
				'An identifier, CodeableConcept or canonical reference to the guidance that was requested.',
		},
		moduleUri: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An identifier, CodeableConcept or canonical reference to the guidance that was requested.',
		},
		_moduleCanonical: {
			type: require('./element.schema.js'),
			description:
				'An identifier, CodeableConcept or canonical reference to the guidance that was requested.',
		},
		moduleCanonical: {
			type: new GraphQLNonNull(CanonicalScalar),
			description:
				'An identifier, CodeableConcept or canonical reference to the guidance that was requested.',
		},
		moduleCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'An identifier, CodeableConcept or canonical reference to the guidance that was requested.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'GuidanceResponsesubject_subject_Union',
				description: 'The patient for which the request was processed.',
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
			description: 'The patient for which the request was processed.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'GuidanceResponseencounter_encounter_Union',
				description:
					'The encounter during which this response was created or to which the creation of this record is tightly associated.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The encounter during which this response was created or to which the creation of this record is tightly associated.',
		},
		_occurrenceDateTime: {
			type: require('./element.schema.js'),
			description: 'Indicates when the guidance response was processed.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'Indicates when the guidance response was processed.',
		},
		performer: {
			type: new GraphQLUnionType({
				name: 'GuidanceResponseperformer_performer_Union',
				description:
					'Provides a reference to the device that performed the guidance.',
				types: () => [require('./device.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description:
				'Provides a reference to the device that performed the guidance.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Describes the reason for the guidance response in coded or textual form.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'GuidanceResponsereasonReference_reasonReference_Union',
					description:
						'Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.',
					types: () => [
						require('./condition.schema.js'),
						require('./observation.schema.js'),
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
				'Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Provides a mechanism to communicate additional information about the response.',
		},
		evaluationMessage: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'GuidanceResponseevaluationMessage_evaluationMessage_Union',
					description:
						'Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.',
					types: () => [require('./operationoutcome.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'OperationOutcome') {
							return require('./operationoutcome.schema.js');
						}
					},
				}),
			),
			description:
				'Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.',
		},
		outputParameters: {
			type: new GraphQLUnionType({
				name: 'GuidanceResponseoutputParameters_outputParameters_Union',
				description:
					'The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.',
				types: () => [require('./parameters.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Parameters') {
						return require('./parameters.schema.js');
					}
				},
			}),
			description:
				'The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.',
		},
		result: {
			type: new GraphQLUnionType({
				name: 'GuidanceResponseresult_result_Union',
				description:
					'The actions, if any, produced by the evaluation of the artifact.',
				types: () => [
					require('./careplan.schema.js'),
					require('./requestgroup.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'CarePlan') {
						return require('./careplan.schema.js');
					}
					if (data && data.resourceType === 'RequestGroup') {
						return require('./requestgroup.schema.js');
					}
				},
			}),
			description:
				'The actions, if any, produced by the evaluation of the artifact.',
		},
		dataRequirement: {
			type: new GraphQLList(require('./datarequirement.schema.js')),
			description:
				'If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.',
		},
	}),
});
