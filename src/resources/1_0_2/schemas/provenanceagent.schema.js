const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Provenanceagent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Provenanceagent',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/provenance-agent-role
		role: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description: 'The function of the agent with respect to the activity.',
		},
		actor: {
			type: new GraphQLUnionType({
				name: 'Provenanceagentactor_actor_Union',
				description:
					'The individual, device or organization that participated in the event.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./relatedperson.schema.js'),
					require('./patient.schema.js'),
					require('./device.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The individual, device or organization that participated in the event.',
		},
		userId: {
			type: require('./identifier.schema.js'),
			description:
				'The identity of the agent as known by the authorization system.',
		},
		relatedAgent: {
			type: new GraphQLList(require('./provenanceagentrelatedagent.schema.js')),
			description:
				"A relationship between two the agents referenced in this resource. This is defined to allow for explicit description of the delegation between agents.  For example, this human author used this device, or one person acted on another's behest.",
		},
	}),
});
