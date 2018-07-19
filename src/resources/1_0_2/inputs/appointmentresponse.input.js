const InstantScalar = require('../scalars/instant.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let AppointmentResponseResourceInputType = new GraphQLEnumType({
	name: 'AppointmentResponseResourceInputType',
	values: {
		AppointmentResponse: { value: 'AppointmentResponse' }
	}
});

/**
 * @name exports
 * @summary AppointmentResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AppointmentResponse_Input',
	description: 'Base StructureDefinition for AppointmentResponse Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(AppointmentResponseResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.'
		},
		appointment: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Appointment that this response is replying to.'
		},
		start: {
			type: InstantScalar,
			description: 'Date/Time that the appointment is to take place, or requested new start time.'
		},
		_start: {
			type: require('./element.input'),
			description: 'Date/Time that the appointment is to take place, or requested new start time.'
		},
		end: {
			type: InstantScalar,
			description: 'This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.'
		},
		_end: {
			type: require('./element.input'),
			description: 'This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-participant-type
		participantType: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Role of participant in the appointment.'
		},
		actor: {
			type: require('./reference.input'),
			description: 'A Person, Location/HealthcareService or Device that is participating in the appointment.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/participantstatus
		participantStatus: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.'
		},
		_participantStatus: {
			type: require('./element.input'),
			description: 'Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.'
		},
		comment: {
			type: GraphQLString,
			description: 'Additional comments about the appointment.'
		},
		_comment: {
			type: require('./element.input'),
			description: 'Additional comments about the appointment.'
		}
	})
});
