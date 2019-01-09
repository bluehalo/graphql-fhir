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
const DateTimeScalar = require('../scalars/dateTime.scalar.js');

/**
 * @name exports
 * @summary Specimen Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Specimen',
	description: 'A sample to be used for analysis.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Specimen_Enum_schema',
					values: { Specimen: { value: 'Specimen' } },
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
			description: 'Id for specimen.',
		},
		accessionIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				'The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The availability of the specimen.',
		},
		status: {
			type: CodeScalar,
			description: 'The availability of the specimen.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'The kind of material that forms the specimen.',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'Specimensubject_subject_Union',
				description:
					'Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.',
				types: () => [
					require('./patient.schema.js'),
					require('./group.schema.js'),
					require('./device.schema.js'),
					require('./substance.schema.js'),
					require('./location.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Substance') {
						return require('./substance.schema.js');
					}
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description:
				'Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.',
		},
		_receivedTime: {
			type: require('./element.schema.js'),
			description: 'Time when specimen was received for processing or testing.',
		},
		receivedTime: {
			type: DateTimeScalar,
			description: 'Time when specimen was received for processing or testing.',
		},
		parent: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Specimenparent_parent_Union',
					description:
						'Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.',
					types: () => [require('./specimen.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Specimen') {
							return require('./specimen.schema.js');
						}
					},
				}),
			),
			description:
				'Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.',
		},
		request: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Specimenrequest_request_Union',
					description:
						'Details concerning a service request that required a specimen to be collected.',
					types: () => [require('./servicerequest.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ServiceRequest') {
							return require('./servicerequest.schema.js');
						}
					},
				}),
			),
			description:
				'Details concerning a service request that required a specimen to be collected.',
		},
		collection: {
			type: require('./specimencollection.schema.js'),
			description: 'Details concerning the specimen collection.',
		},
		processing: {
			type: new GraphQLList(require('./specimenprocessing.schema.js')),
			description:
				'Details concerning processing and processing steps for the specimen.',
		},
		container: {
			type: new GraphQLList(require('./specimencontainer.schema.js')),
			description:
				'The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.',
		},
		condition: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A mode or state of being that describes the nature of the specimen.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).',
		},
	}),
});
