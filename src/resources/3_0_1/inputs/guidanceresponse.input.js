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
 * @summary GuidanceResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'GuidanceResponse_Input',
	description: 'Base StructureDefinition for GuidanceResponse Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'GuidanceResponse_Enum_input',
					values: { GuidanceResponse: { value: 'GuidanceResponse' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_requestId: {
			type: require('./element.input.js'),
			description:
				'The id of the request associated with this response. If an id was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.',
		},
		requestId: {
			type: IdScalar,
			description:
				'The id of the request associated with this response. If an id was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.',
		},
		identifier: {
			type: require('./identifier.input.js'),
			description:
				'Allows a service to provide a unique, business identifier for the response.',
		},
		module: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A reference to the knowledge module that was invoked.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/guidance-response-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.',
		},
		subject: {
			type: GraphQLString,
			description: 'The patient for which the request was processed.',
		},
		context: {
			type: GraphQLString,
			description:
				'Allows the context of the guidance response to be provided if available. In a service context, this would likely be unavailable.',
		},
		_occurrenceDateTime: {
			type: require('./element.input.js'),
			description: 'Indicates when the guidance response was processed.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'Indicates when the guidance response was processed.',
		},
		performer: {
			type: GraphQLString,
			description:
				'Provides a reference to the device that performed the guidance.',
		},
		reasonCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.',
		},
		reasonReference: {
			type: GraphQLString,
			description:
				'Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Provides a mechanism to communicate additional information about the response.',
		},
		evaluationMessage: {
			type: new GraphQLList(GraphQLString),
			description:
				'Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.',
		},
		outputParameters: {
			type: GraphQLString,
			description:
				'The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.',
		},
		result: {
			type: GraphQLString,
			description:
				'The actions, if any, produced by the evaluation of the artifact.',
		},
		dataRequirement: {
			type: new GraphQLList(require('./datarequirement.input.js')),
			description:
				'If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.',
		},
	}),
});
