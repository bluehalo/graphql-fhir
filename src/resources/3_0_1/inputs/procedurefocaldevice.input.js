const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Procedure.focalDevice Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcedureFocalDevice_Input',
	description: 'A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/device-action
		action: {
			type: require('./codeableconcept.input'),
			description: 'The kind of change that happened to the device during the procedure.'
		},
		manipulated: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The device that was manipulated (changed) during the procedure.'
		}
	})
});
