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

/**
 * @name exports
 * @summary DiagnosticOrder Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DiagnosticOrder_Input',
	description: 'Base StructureDefinition for DiagnosticOrder Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DiagnosticOrder_Enum_input',
					values: { DiagnosticOrder: { value: 'DiagnosticOrder' } },
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
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Who or what the investigation is to be performed on. This is usually a human patient, but diagnostic tests can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).',
		},
		orderer: {
			type: GraphQLString,
			description:
				'The practitioner that holds legal responsibility for ordering the investigation.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Identifiers assigned to this order instance by the orderer and/or  the receiver and/or order fulfiller.',
		},
		encounter: {
			type: GraphQLString,
			description:
				'An encounter that provides additional information about the healthcare context in which this request is made.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reason: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'An explanation or justification for why this diagnostic investigation is being requested.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.',
		},
		supportingInformation: {
			type: new GraphQLList(GraphQLString),
			description:
				'Additional clinical information about the patient or specimen that may influence test interpretations.  This includes observations explicitly requested by the producer(filler) to provide context or supporting information needed to complete the order.',
		},
		specimen: {
			type: new GraphQLList(GraphQLString),
			description:
				'One or more specimens that the diagnostic investigation is about.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-status
		status: {
			type: CodeScalar,
			description: 'The status of the order.',
		},
		_priority: {
			type: require('./element.input.js'),
			description: 'The clinical priority associated with this order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-priority
		priority: {
			type: CodeScalar,
			description: 'The clinical priority associated with this order.',
		},
		event: {
			type: new GraphQLList(require('./diagnosticorderevent.input.js')),
			description:
				'A summary of the events of interest that have occurred as the request is processed; e.g. when the order was made, various processing steps (specimens received), when it was completed.',
		},
		item: {
			type: new GraphQLList(require('./diagnosticorderitem.input.js')),
			description:
				'The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				"Any other notes associated with this patient, specimen or order (e.g. 'patient hates needles').",
		},
	}),
});
