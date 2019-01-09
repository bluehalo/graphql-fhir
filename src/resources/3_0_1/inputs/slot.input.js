const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary Slot Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Slot_Input',
	description: 'Base StructureDefinition for Slot Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Slot_Enum_input',
					values: { Slot: { value: 'Slot' } },
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
			description: 'External Ids for this item.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-category
		serviceCategory: {
			type: require('./codeableconcept.input.js'),
			description:
				'A broad categorisation of the service that is to be performed during this appointment.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-type
		serviceType: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		specialty: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The specialty of a practitioner that would be required to perform the service requested in this appointment.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v2-0276
		appointmentType: {
			type: require('./codeableconcept.input.js'),
			description:
				'The style of appointment or patient that may be booked in the slot (not service type).',
		},
		schedule: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The schedule resource that this slot defines an interval of status information.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'busy | free | busy-unavailable | busy-tentative | entered-in-error.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/slotstatus
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'busy | free | busy-unavailable | busy-tentative | entered-in-error.',
		},
		_start: {
			type: require('./element.input.js'),
			description: 'Date/Time that the slot is to begin.',
		},
		start: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'Date/Time that the slot is to begin.',
		},
		_end: {
			type: require('./element.input.js'),
			description: 'Date/Time that the slot is to conclude.',
		},
		end: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'Date/Time that the slot is to conclude.',
		},
		_overbooked: {
			type: require('./element.input.js'),
			description:
				'This slot has already been overbooked, appointments are unlikely to be accepted for this time.',
		},
		overbooked: {
			type: GraphQLBoolean,
			description:
				'This slot has already been overbooked, appointments are unlikely to be accepted for this time.',
		},
		_comment: {
			type: require('./element.input.js'),
			description:
				'Comments on the slot to describe any extended information. Such as custom constraints on the slot.',
		},
		comment: {
			type: GraphQLString,
			description:
				'Comments on the slot to describe any extended information. Such as custom constraints on the slot.',
		},
	}),
});
