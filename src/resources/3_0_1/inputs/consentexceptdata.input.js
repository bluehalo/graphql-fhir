const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Consent.except.data Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConsentExceptData_Input',
	description: 'The resources controlled by this exception, if specific resources are referenced.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/consent-data-meaning
		meaning: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How the resource reference is interpreted when testing consent restrictions.'
		},
		_meaning: {
			type: require('./element.input'),
			description: 'How the resource reference is interpreted when testing consent restrictions.'
		},
		reference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A reference to a specific resource that defines which resources are covered by this consent.'
		}
	})
});
