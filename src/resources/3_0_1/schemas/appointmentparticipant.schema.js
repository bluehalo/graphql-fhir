const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Appointmentparticipant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Appointmentparticipant',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-participant-type
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Role of participant in the appointment.',
		},
		actor: {
			type: new GraphQLUnionType({
				name: 'Appointmentparticipantactor_actor_Union',
				description:
					'A Person, Location/HealthcareService or Device that is participating in the appointment.',
				types: () => [
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./relatedperson.schema.js'),
					require('./device.schema.js'),
					require('./healthcareservice.schema.js'),
					require('./location.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'HealthcareService') {
						return require('./healthcareservice.schema.js');
					}
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description:
				'A Person, Location/HealthcareService or Device that is participating in the appointment.',
		},
		_required: {
			type: require('./element.schema.js'),
			description:
				'Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/participantrequired
		required: {
			type: CodeScalar,
			description:
				'Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'Participation status of the actor.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/participationstatus
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Participation status of the actor.',
		},
	}),
});
