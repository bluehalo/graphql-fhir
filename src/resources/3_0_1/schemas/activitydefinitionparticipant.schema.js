const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ActivityDefinition.participant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ActivityDefinitionParticipant',
	description: 'Indicates who should participate in performing the action described.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-participant-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of participant in the action.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of participant in the action.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-participant-role
		role: {
			type: require('./codeableconcept.schema'),
			description: 'The role the participant should play in performing the described action.'
		}
	})
});
