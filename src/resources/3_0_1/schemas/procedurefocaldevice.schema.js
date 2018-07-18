const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ProcedureFocalDevice Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcedureFocalDevice',
	description: 'A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/device-action
		action: {
			type: require('./codeableconcept.schema'),
			description: 'The kind of change that happened to the device during the procedure.'
		},
		manipulated: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The device that was manipulated (changed) during the procedure.'
		}
	})
});
