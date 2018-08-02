const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLList, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AppointmentParticipant Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AppointmentParticipant_Input',
	description: 'List of participants involved in the appointment.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-participant-type
		type: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Role of participant in the appointment.'
		},
		actor: {
			type: require('./reference.input'),
			description: 'A Person, Location/HealthcareService or Device that is participating in the appointment.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/participantrequired
		required: {
			type: CodeScalar,
			description: 'Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.'
		},
		_required: {
			type: require('./element.input'),
			description: 'Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/participationstatus
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Participation status of the Patient.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Participation status of the Patient.'
		}
	})
});
