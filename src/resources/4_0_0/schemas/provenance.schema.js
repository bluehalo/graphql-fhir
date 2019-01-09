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
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary Provenance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Provenance',
	description:
		'Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Provenance_Enum_schema',
					values: { Provenance: { value: 'Provenance' } },
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
		target: {
			type: new GraphQLList(
				new GraphQLNonNull(
					new GraphQLUnionType({
						name: 'Provenancetarget_target_Union',
						description:
							'The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.',
						types: () => [require('./resource.schema.js')],
						resolveType(data) {
							if (data && data.resourceType === 'Resource') {
								return require('./resource.schema.js');
							}
						},
					}),
				),
			),
			description:
				'The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.',
		},
		occurredPeriod: {
			type: require('./period.schema.js'),
			description: 'The period during which the activity occurred.',
		},
		_occurredDateTime: {
			type: require('./element.schema.js'),
			description: 'The period during which the activity occurred.',
		},
		occurredDateTime: {
			type: DateTimeScalar,
			description: 'The period during which the activity occurred.',
		},
		_recorded: {
			type: require('./element.schema.js'),
			description: 'The instant of time at which the activity was recorded.',
		},
		recorded: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'The instant of time at which the activity was recorded.',
		},
		_policy: {
			type: require('./element.schema.js'),
			description:
				'Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.',
		},
		policy: {
			type: new GraphQLList(UriScalar),
			description:
				'Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.',
		},
		location: {
			type: new GraphQLUnionType({
				name: 'Provenancelocation_location_Union',
				description: 'Where the activity occurred, if relevant.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'Where the activity occurred, if relevant.',
		},
		reason: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'The reason that the activity was taking place.',
		},
		activity: {
			type: require('./codeableconcept.schema.js'),
			description:
				'An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.',
		},
		agent: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./provenanceagent.schema.js')),
			),
			description:
				'An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place.',
		},
		entity: {
			type: new GraphQLList(require('./provenanceentity.schema.js')),
			description: 'An entity used in this activity.',
		},
		signature: {
			type: new GraphQLList(require('./signature.schema.js')),
			description:
				'A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.',
		},
	}),
});
