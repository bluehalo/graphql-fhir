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
	description: 'Base StructureDefinition for DeviceUseStatement Resource',
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
			description: 'An external identifier for this statement such as an IRI.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				"A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/device-statement-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed.",
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The patient who used the device.',
		},
		whenUsed: {
			type: require('./period.input.js'),
			description: 'The time period over which the device was used.',
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
		indication: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Reason or justification for the use of the device.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.input.js'),
			description:
				"Indicates the site on the subject's body where the device was used ( i.e. the target site).",
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.',
		},
	}),
});
