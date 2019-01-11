const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary Slot Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Slot',
	description: 'Base StructureDefinition for Slot Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Slot_Enum_schema',
					values: { Slot: { value: 'Slot' } },
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
			description: 'External Ids for this item.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.',
		},
		schedule: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Slotschedule_schedule_Union',
					description:
						'The schedule resource that this slot defines an interval of status information.',
					types: () => [require('./schedule.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Schedule') {
							return require('./schedule.schema.js');
						}
					},
				}),
			),
			description:
				'The schedule resource that this slot defines an interval of status information.',
		},
		_freeBusyType: {
			type: require('./element.schema.js'),
			description: 'busy | free | busy-unavailable | busy-tentative.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/slotstatus
		freeBusyType: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'busy | free | busy-unavailable | busy-tentative.',
		},
		_start: {
			type: require('./element.schema.js'),
			description: 'Date/Time that the slot is to begin.',
		},
		start: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'Date/Time that the slot is to begin.',
		},
		_end: {
			type: require('./element.schema.js'),
			description: 'Date/Time that the slot is to conclude.',
		},
		end: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'Date/Time that the slot is to conclude.',
		},
		_overbooked: {
			type: require('./element.schema.js'),
			description:
				'This slot has already been overbooked, appointments are unlikely to be accepted for this time.',
		},
		overbooked: {
			type: GraphQLBoolean,
			description:
				'This slot has already been overbooked, appointments are unlikely to be accepted for this time.',
		},
		_comment: {
			type: require('./element.schema.js'),
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
