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
 * @summary SupplyRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SupplyRequest_Input',
	description: 'Base StructureDefinition for SupplyRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'SupplyRequest_Enum_input',
					values: { SupplyRequest: { value: 'SupplyRequest' } },
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
		patient: {
			type: GraphQLString,
			description:
				'A link to a resource representing the person whom the ordered item is for.',
		},
		source: {
			type: GraphQLString,
			description:
				'The Practitioner , Organization or Patient who initiated this order for the supply.',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'When the request was made.',
		},
		date: {
			type: DateTimeScalar,
			description: 'When the request was made.',
		},
		identifier: {
			type: require('./identifier.input.js'),
			description: 'Unique identifier for this supply request.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'Status of the supply request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-status
		status: {
			type: CodeScalar,
			description: 'Status of the supply request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-kind
		kind: {
			type: require('./codeableconcept.input.js'),
			description:
				'Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.',
		},
		orderedItem: {
			type: GraphQLString,
			description: 'The item that is requested to be supplied.',
		},
		supplier: {
			type: new GraphQLList(GraphQLString),
			description: 'Who is intended to fulfill the request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-reason
		reasonCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description: 'Why the supply item was requested.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-reason
		reasonReference: {
			type: GraphQLString,
			description: 'Why the supply item was requested.',
		},
		when: {
			type: require('./supplyrequestwhen.input.js'),
			description: 'When the request should be fulfilled.',
		},
	}),
});
