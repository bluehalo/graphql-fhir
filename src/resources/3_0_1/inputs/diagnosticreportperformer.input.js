const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DiagnosticReportPerformer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DiagnosticReportPerformer_Input',
	description: 'Indicates who or what participated in producing the report.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/performer-role
		role: {
			type: require('./codeableconcept.input'),
			description: 'Describes the type of participation (e.g.  a responsible party, author, or verifier).'
		},
		actor: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The reference to the  practitioner or organization involved in producing the report. For example, the diagnostic service that is responsible for issuing the report.'
		}
	})
});
