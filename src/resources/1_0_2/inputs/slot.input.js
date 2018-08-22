const CodeScalar = require('../scalars/code.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let SlotResourceInputType = new GraphQLEnumType({
	name: 'SlotResourceInputType',
	values: {
		Slot: { value: 'Slot' }
	}
});

/**
 * @name exports
 * @summary Slot Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Slot_Input',
	description: 'Base StructureDefinition for Slot Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(SlotResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'External Ids for this item.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		type: {
			type: require('./codeableconcept.input'),
			description: 'The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.'
		},
		schedule: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The schedule resource that this slot defines an interval of status information.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/slotstatus
		freeBusyType: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'busy | free | busy-unavailable | busy-tentative.'
		},
		_freeBusyType: {
			type: require('./element.input'),
			description: 'busy | free | busy-unavailable | busy-tentative.'
		},
		start: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'Date/Time that the slot is to begin.'
		},
		_start: {
			type: require('./element.input'),
			description: 'Date/Time that the slot is to begin.'
		},
		end: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'Date/Time that the slot is to conclude.'
		},
		_end: {
			type: require('./element.input'),
			description: 'Date/Time that the slot is to conclude.'
		},
		overbooked: {
			type: GraphQLBoolean,
			description: 'This slot has already been overbooked, appointments are unlikely to be accepted for this time.'
		},
		_overbooked: {
			type: require('./element.input'),
			description: 'This slot has already been overbooked, appointments are unlikely to be accepted for this time.'
		},
		comment: {
			type: GraphQLString,
			description: 'Comments on the slot to describe any extended information. Such as custom constraints on the slot.'
		},
		_comment: {
			type: require('./element.input'),
			description: 'Comments on the slot to describe any extended information. Such as custom constraints on the slot.'
		}
	})
});
