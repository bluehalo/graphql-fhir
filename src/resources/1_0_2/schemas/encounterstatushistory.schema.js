const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary EncounterStatusHistory Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EncounterStatusHistory',
	description: 'The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-state
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'planned | arrived | in-progress | onleave | finished | cancelled.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'planned | arrived | in-progress | onleave | finished | cancelled.'
		},
		period: {
			type: new GraphQLNonNull(require('./period.schema')),
			description: 'The time that the episode was in the specified status.'
		}
	})
});
