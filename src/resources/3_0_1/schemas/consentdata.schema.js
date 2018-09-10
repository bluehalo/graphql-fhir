const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Consent.data Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConsentData',
	description: 'The resources controlled by this consent, if specific resources are referenced.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/consent-data-meaning
		meaning: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How the resource reference is interpreted when testing consent restrictions.'
		},
		_meaning: {
			type: require('./element.schema'),
			description: 'How the resource reference is interpreted when testing consent restrictions.'
		},
		reference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A reference to a specific resource that defines which resources are covered by this consent.'
		}
	})
});
