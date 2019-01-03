const CodeScalar = require('../scalars/code.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let AppointmentResourceType = new GraphQLEnumType({
	name: 'AppointmentResourceType',
	values: {
		Appointment: { value: 'Appointment' },
	},
});

/**
 * @name exports
 * @summary Appointment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Appointment',
	description: 'Base StructureDefinition for Appointment Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(AppointmentResourceType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.schema')),
				description:
					'This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/appointmentstatus
			status: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.',
			},
			_status: {
				type: require('./element.schema'),
				description:
					'The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/service-category
			serviceCategory: {
				type: require('./codeableconcept.schema'),
				description:
					'A broad categorisation of the service that is to be performed during this appointment.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/service-type
			serviceType: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The specific service that is to be performed during this appointment.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
			specialty: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The specialty of a practitioner that would be required to perform the service requested in this appointment.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0276
			appointmentType: {
				type: require('./codeableconcept.schema'),
				description:
					'The style of appointment or patient that has been booked in the slot (not service type).',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-reason
			reason: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description:
					'The reason that this appointment is being scheduled. This is more clinical than administrative.',
			},
			indication: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.',
			},
			priority: {
				type: UnsignedIntScalar,
				description:
					'The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).',
			},
			_priority: {
				type: require('./element.schema'),
				description:
					'The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).',
			},
			description: {
				type: GraphQLString,
				description:
					'The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.',
			},
			_description: {
				type: require('./element.schema'),
				description:
					'The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.',
			},
			supportingInformation: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'Additional information to support the appointment provided when making the appointment.',
			},
			start: {
				type: InstantScalar,
				description: 'Date/Time that the appointment is to take place.',
			},
			_start: {
				type: require('./element.schema'),
				description: 'Date/Time that the appointment is to take place.',
			},
			end: {
				type: InstantScalar,
				description: 'Date/Time that the appointment is to conclude.',
			},
			_end: {
				type: require('./element.schema'),
				description: 'Date/Time that the appointment is to conclude.',
			},
			minutesDuration: {
				type: PositiveIntScalar,
				description:
					'Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).',
			},
			_minutesDuration: {
				type: require('./element.schema'),
				description:
					'Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).',
			},
			slot: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					"The slots from the participants' schedules that will be filled by the appointment.",
			},
			created: {
				type: DateTimeScalar,
				description:
					'The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment.',
			},
			_created: {
				type: require('./element.schema'),
				description:
					'The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment.',
			},
			comment: {
				type: GraphQLString,
				description: 'Additional comments about the appointment.',
			},
			_comment: {
				type: require('./element.schema'),
				description: 'Additional comments about the appointment.',
			},
			incomingReferral: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'The referral request this appointment is allocated to assess (incoming referral).',
			},
			participant: {
				type: new GraphQLList(
					new GraphQLNonNull(require('./appointmentparticipant.schema')),
				),
				description: 'List of participants involved in the appointment.',
			},
			requestedPeriod: {
				type: new GraphQLList(require('./period.schema')),
				description:
					'A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within. When using these values, the minutes duration should be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time.',
			},
		}),
});
