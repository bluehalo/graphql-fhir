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
 * @summary DeviceRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DeviceRequest_Input',
	description: 'Base StructureDefinition for DeviceRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DeviceRequest_Enum_input',
					values: { DeviceRequest: { value: 'DeviceRequest' } },
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
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Identifiers assigned to this order by the orderer or by the receiver.',
		},
		definition: {
			type: new GraphQLList(GraphQLString),
			description:
				'Protocol or definition followed by this request. For example: The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description: 'Plan/proposal/order fulfilled by this request.',
		},
		priorRequest: {
			type: new GraphQLList(GraphQLString),
			description:
				'The request takes the place of the referenced completed or terminated request(s).',
		},
		groupIdentifier: {
			type: require('./identifier.input.js'),
			description: 'Composite request this is part of.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-status
		status: {
			type: CodeScalar,
			description: 'The status of the request.',
		},
		// valueSetReference: http://build.fhir.org/valueset-request-intent.html
		intent: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Whether the request is a proposal, plan, an original order or a reflex order.',
		},
		_priority: {
			type: require('./element.input.js'),
			description:
				'Indicates how quickly the {{title}} should be addressed with respect to other requests.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly the {{title}} should be addressed with respect to other requests.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/device-kind
		codeReference: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The details of the device to be used.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/device-kind
		codeCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'The details of the device to be used.',
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The patient who will use the device.',
		},
		context: {
			type: GraphQLString,
			description:
				'An encounter that provides additional context in which this request is made.',
		},
		_occurrenceDateTime: {
			type: require('./element.input.js'),
			description:
				"The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description:
				"The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		occurrencePeriod: {
			type: require('./period.input.js'),
			description:
				"The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		occurrenceTiming: {
			type: require('./timing.input.js'),
			description:
				"The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		_authoredOn: {
			type: require('./element.input.js'),
			description: 'When the request transitioned to being actionable.',
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'When the request transitioned to being actionable.',
		},
		requester: {
			type: require('./devicerequestrequester.input.js'),
			description:
				'The individual who initiated the request and has responsibility for its activation.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		performerType: {
			type: require('./codeableconcept.input.js'),
			description:
				'Desired type of performer for doing the diagnostic testing.',
		},
		performer: {
			type: GraphQLString,
			description: 'The desired perfomer for doing the diagnostic testing.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Reason or justification for the use of this device.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description: 'Reason or justification for the use of this device.',
		},
		supportingInfo: {
			type: new GraphQLList(GraphQLString),
			description:
				"Additional clinical information about the patient that may influence the request fulfilment.  For example, this may includes body where on the subject's the device will be used ( i.e. the target site).",
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.',
		},
		relevantHistory: {
			type: new GraphQLList(GraphQLString),
			description: 'Key events in the history of the request.',
		},
	}),
});
