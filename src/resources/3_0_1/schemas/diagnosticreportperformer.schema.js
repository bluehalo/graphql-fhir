const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DiagnosticReportPerformer Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DiagnosticReportPerformer',
	description: 'Indicates who or what participated in producing the report.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/performer-role
		role: {
			type: require('./codeableconcept.schema'),
			description: 'Describes the type of participation (e.g.  a responsible party, author, or verifier).'
		},
		actor: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The reference to the  practitioner or organization involved in producing the report. For example, the diagnostic service that is responsible for issuing the report.'
		}
	})
});
