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
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary DeviceComponent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceComponent',
	description: 'Base StructureDefinition for DeviceComponent Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DeviceComponent_Enum_schema',
					values: { DeviceComponent: { value: 'DeviceComponent' } },
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
			type: new GraphQLNonNull(require('./identifier.schema.js')),
			description:
				'The locally assigned unique identification by the software. For example: handle ID.',
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'The component type as defined in the object-oriented or metric nomenclature partition.',
		},
		_lastSystemChange: {
			type: require('./element.schema.js'),
			description:
				'The timestamp for the most recent system change which includes device configuration or setting change.',
		},
		lastSystemChange: {
			type: InstantScalar,
			description:
				'The timestamp for the most recent system change which includes device configuration or setting change.',
		},
		source: {
			type: new GraphQLUnionType({
				name: 'DeviceComponentsource_source_Union',
				description:
					'The link to the source Device that contains administrative device information such as manufacture, serial number, etc.',
				types: () => [require('./device.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description:
				'The link to the source Device that contains administrative device information such as manufacture, serial number, etc.',
		},
		parent: {
			type: new GraphQLUnionType({
				name: 'DeviceComponentparent_parent_Union',
				description:
					'The link to the parent resource. For example: Channel is linked to its VMD parent.',
				types: () => [require('./devicecomponent.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'DeviceComponent') {
						return require('./devicecomponent.schema.js');
					}
				},
			}),
			description:
				'The link to the parent resource. For example: Channel is linked to its VMD parent.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/operational-status
		operationalStatus: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The current operational status of the device. For example: On, Off, Standby, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/parameter-group
		parameterGroup: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.',
		},
		_measurementPrinciple: {
			type: require('./element.schema.js'),
			description:
				'The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/measurement-principle
		measurementPrinciple: {
			type: CodeScalar,
			description:
				'The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.',
		},
		productionSpecification: {
			type: new GraphQLList(
				require('./devicecomponentproductionspecification.schema.js'),
			),
			description:
				'The production specification such as component revision, serial number, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		languageCode: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.',
		},
	}),
});
