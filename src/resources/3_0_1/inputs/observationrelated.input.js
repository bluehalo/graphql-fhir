const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ObservationRelated Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ObservationRelated_Input',
	description: 'A  reference to another resource (usually another Observation) whose relationship is defined by the relationship type code.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/observation-relationshiptypes
		type: {
			type: CodeScalar,
			description: 'A code specifying the kind of relationship that exists with the target resource.'
		},
		_type: {
			type: require('./element.input'),
			description: 'A code specifying the kind of relationship that exists with the target resource.'
		},
		target: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A reference to the observation or [QuestionnaireResponse](questionnaireresponse.html#) resource that is related to this observation.'
		}
	})
});
