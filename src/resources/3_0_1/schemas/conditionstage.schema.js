const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConditionStage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConditionStage',
	description: 'Clinical stage or grade of a condition. May include formal severity assessments.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/condition-stage
		summary: {
			type: require('./codeableconcept.schema'),
			description: 'A simple summary of the stage such as \'Stage 3\'. The determination of the stage is disease-specific.'
		},
		assessment: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Reference to a formal record of the evidence on which the staging assessment is based.'
		}
	})
});
