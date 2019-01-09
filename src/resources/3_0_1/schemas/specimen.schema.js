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
	description: 'Base StructureDefinition for Specimen Resource',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/specimen-status
		status: {
			type: CodeScalar,
			description: 'The availability of the specimen.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v2-0487
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'The kind of material that forms the specimen.',
		},
		subject: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Specimensubject_subject_Union',
					description:
						'Where the specimen came from. This may be from the patient(s) or from the environment or a device.',
					types: () => [
						require('./patient.schema.js'),
						require('./group.schema.js'),
						require('./device.schema.js'),
						require('./substance.schema.js'),
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
					},
				}),
			),
			description:
				'Where the specimen came from. This may be from the patient(s) or from the environment or a device.',
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
						'Details concerning a test or procedure request that required a specimen to be collected.',
					types: () => [require('./procedurerequest.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ProcedureRequest') {
							return require('./procedurerequest.schema.js');
						}
					},
				}),
			),
			description:
				'Details concerning a test or procedure request that required a specimen to be collected.',
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
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).',
		},
	}),
});
