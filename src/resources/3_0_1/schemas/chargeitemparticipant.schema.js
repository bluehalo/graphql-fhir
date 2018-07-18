const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ChargeItemParticipant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ChargeItemParticipant',
	description: 'Indicates who or what performed or participated in the charged service.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/performer-role
		role: {
			type: require('./codeableconcept.schema'),
			description: 'Describes the type of performance or participation(e.g. primary surgeon, anaesthesiologiest, etc.).'
		},
		actor: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The device, practitioner, etc. who performed or participated in the service.'
		}
	})
});
