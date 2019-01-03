const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Observation.related Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ObservationRelated',
	description: 'A  reference to another resource (usually another Observation) whose relationship is defined by the relationship type code.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-relationshiptypes
		type: {
			type: CodeScalar,
			description: 'A code specifying the kind of relationship that exists with the target resource.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'A code specifying the kind of relationship that exists with the target resource.'
		},
		target: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A reference to the observation or [QuestionnaireResponse](questionnaireresponse.html#) resource that is related to this observation.'
		}
	})
});
