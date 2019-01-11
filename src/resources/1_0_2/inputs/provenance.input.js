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
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary Provenance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Provenance_Input',
	description: 'Base StructureDefinition for Provenance Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Provenance_Enum_input',
					values: { Provenance: { value: 'Provenance' } },
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
		target: {
			type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
			description:
				'The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.',
		},
		period: {
			type: require('./period.input.js'),
			description: 'The period during which the activity occurred.',
		},
		_recorded: {
			type: require('./element.input.js'),
			description: 'The instant of time at which the activity was recorded.',
		},
		recorded: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'The instant of time at which the activity was recorded.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		reason: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'The reason that the activity was taking place.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ProvenanceEventCurrentState
		activity: {
			type: require('./codeableconcept.input.js'),
			description:
				'An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.',
		},
		location: {
			type: GraphQLString,
			description: 'Where the activity occurred, if relevant.',
		},
		_policy: {
			type: require('./element.input.js'),
			description:
				'Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.',
		},
		policy: {
			type: new GraphQLList(UriScalar),
			description:
				'Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.',
		},
		agent: {
			type: new GraphQLList(require('./provenanceagent.input.js')),
			description:
				'An agent takes a role in an activity such that the agent can be assigned some degree of responsibility for the activity taking place. An agent can be a person, an organization, software, or other entities that may be ascribed responsibility.',
		},
		entity: {
			type: new GraphQLList(require('./provenanceentity.input.js')),
			description: 'An entity used in this activity.',
		},
		signature: {
			type: new GraphQLList(require('./signature.input.js')),
			description:
				'A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.',
		},
	}),
});
