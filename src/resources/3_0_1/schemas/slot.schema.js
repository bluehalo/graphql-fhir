const CodeScalar = require('../scalars/code.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let SlotResourceType = new GraphQLEnumType({
	name: 'SlotResourceType',
	values: {
		Slot: { value: 'Slot' }
	}
});

/**
 * @name exports
 * @summary Slot Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Slot',
	description: 'Base StructureDefinition for Slot Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(SlotResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'External Ids for this item.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-category
		serviceCategory: {
			type: require('./codeableconcept.schema'),
			description: 'A broad categorisation of the service that is to be performed during this appointment.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-type
		serviceType: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		specialty: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The specialty of a practitioner that would be required to perform the service requested in this appointment.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0276
		appointmentType: {
			type: require('./codeableconcept.schema'),
			description: 'The style of appointment or patient that may be booked in the slot (not service type).'
		},
		schedule: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The schedule resource that this slot defines an interval of status information.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/slotstatus
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'busy | free | busy-unavailable | busy-tentative | entered-in-error.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'busy | free | busy-unavailable | busy-tentative | entered-in-error.'
		},
		start: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'Date/Time that the slot is to begin.'
		},
		_start: {
			type: require('./element.schema'),
			description: 'Date/Time that the slot is to begin.'
		},
		end: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'Date/Time that the slot is to conclude.'
		},
		_end: {
			type: require('./element.schema'),
			description: 'Date/Time that the slot is to conclude.'
		},
		overbooked: {
			type: GraphQLBoolean,
			description: 'This slot has already been overbooked, appointments are unlikely to be accepted for this time.'
		},
		_overbooked: {
			type: require('./element.schema'),
			description: 'This slot has already been overbooked, appointments are unlikely to be accepted for this time.'
		},
		comment: {
			type: GraphQLString,
			description: 'Comments on the slot to describe any extended information. Such as custom constraints on the slot.'
		},
		_comment: {
			type: require('./element.schema'),
			description: 'Comments on the slot to describe any extended information. Such as custom constraints on the slot.'
		}
	})
});
