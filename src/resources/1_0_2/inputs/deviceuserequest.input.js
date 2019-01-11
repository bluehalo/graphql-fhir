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
 * @summary DeviceUseRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DeviceUseRequest_Input',
	description: 'Base StructureDefinition for DeviceUseRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DeviceUseRequest_Enum_input',
					values: { DeviceUseRequest: { value: 'DeviceUseRequest' } },
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
		bodySiteCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				"Indicates the site on the subject's body where the device should be used ( i.e. the target site).",
		},
		bodySiteReference: {
			type: GraphQLString,
			description:
				"Indicates the site on the subject's body where the device should be used ( i.e. the target site).",
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/device-use-request-status
		status: {
			type: CodeScalar,
			description: 'The status of the request.',
		},
		device: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The details of the device  to be used.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'An encounter that provides additional context in which this request is made.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Identifiers assigned to this order by the orderer or by the receiver.',
		},
		indication: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Reason or justification for the use of this device.',
		},
		_notes: {
			type: require('./element.input.js'),
			description:
				'Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.',
		},
		notes: {
			type: new GraphQLList(GraphQLString),
			description:
				'Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.',
		},
		prnReason: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.',
		},
		_orderedOn: {
			type: require('./element.input.js'),
			description: 'The time when the request was made.',
		},
		orderedOn: {
			type: DateTimeScalar,
			description: 'The time when the request was made.',
		},
		_recordedOn: {
			type: require('./element.input.js'),
			description: 'The time at which the request was made/recorded.',
		},
		recordedOn: {
			type: DateTimeScalar,
			description: 'The time at which the request was made/recorded.',
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The patient who will use the device.',
		},
		timingTiming: {
			type: require('./timing.input.js'),
			description:
				"The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		timingPeriod: {
			type: require('./period.input.js'),
			description:
				"The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		_timingDateTime: {
			type: require('./element.input.js'),
			description:
				"The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		timingDateTime: {
			type: DateTimeScalar,
			description:
				"The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		_priority: {
			type: require('./element.input.js'),
			description:
				'Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/device-use-request-priority
		priority: {
			type: CodeScalar,
			description:
				'Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.',
		},
	}),
});
