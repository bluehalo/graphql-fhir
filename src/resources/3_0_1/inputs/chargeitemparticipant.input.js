const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ChargeItemParticipant Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ChargeItemParticipant_Input',
	description: 'Indicates who or what performed or participated in the charged service.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/performer-role
		role: {
			type: require('./codeableconcept.input'),
			description: 'Describes the type of performance or participation(e.g. primary surgeon, anaesthesiologiest, etc.).'
		},
		actor: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The device, practitioner, etc. who performed or participated in the service.'
		}
	})
});
