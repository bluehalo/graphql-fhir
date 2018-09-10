const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLList, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Appointment.participant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AppointmentParticipant',
	description: 'List of participants involved in the appointment.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-participant-type
		type: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Role of participant in the appointment.'
		},
		actor: {
			type: require('./reference.schema'),
			description: 'A Person, Location/HealthcareService or Device that is participating in the appointment.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/participantrequired
		required: {
			type: CodeScalar,
			description: 'Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.'
		},
		_required: {
			type: require('./element.schema'),
			description: 'Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/participationstatus
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Participation status of the actor.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Participation status of the actor.'
		}
	})
});
