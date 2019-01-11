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
 * @summary DeviceUseStatement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DeviceUseStatement_Input',
	description:
		'A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DeviceUseStatement_Enum_input',
					values: { DeviceUseStatement: { value: 'DeviceUseStatement' } },
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
			description: 'An external identifier for this statement such as an IRI.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description:
				'A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				"A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed.",
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed.",
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The patient who used the device.',
		},
		derivedFrom: {
			type: new GraphQLList(GraphQLString),
			description:
				'Allows linking the DeviceUseStatement to the underlying Request, or to other information that supports or is used to derive the DeviceUseStatement.',
		},
		timingTiming: {
			type: require('./timing.input.js'),
			description: 'How often the device was used.',
		},
		timingPeriod: {
			type: require('./period.input.js'),
			description: 'How often the device was used.',
		},
		_timingDateTime: {
			type: require('./element.input.js'),
			description: 'How often the device was used.',
		},
		timingDateTime: {
			type: DateTimeScalar,
			description: 'How often the device was used.',
		},
		_recordedOn: {
			type: require('./element.input.js'),
			description: 'The time at which the statement was made/recorded.',
		},
		recordedOn: {
			type: DateTimeScalar,
			description: 'The time at which the statement was made/recorded.',
		},
		source: {
			type: GraphQLString,
			description: 'Who reported the device was being used by the patient.',
		},
		device: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The details of the device used.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Reason or justification for the use of the device.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates another resource whose existence justifies this DeviceUseStatement.',
		},
		bodySite: {
			type: require('./codeableconcept.input.js'),
			description:
				"Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).",
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.',
		},
	}),
});
