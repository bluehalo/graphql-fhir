const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Condition.stage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConditionStage_Input',
	description: 'Clinical stage or grade of a condition. May include formal severity assessments.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-stage
		summary: {
			type: require('./codeableconcept.input'),
			description: 'A simple summary of the stage such as \'Stage 3\'. The determination of the stage is disease-specific.'
		},
		assessment: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Reference to a formal record of the evidence on which the staging assessment is based.'
		}
	})
});
