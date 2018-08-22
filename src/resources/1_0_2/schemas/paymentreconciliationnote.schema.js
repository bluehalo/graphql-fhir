const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PaymentReconciliationNote Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PaymentReconciliationNote',
	description: 'Suite of notes.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
		type: {
			type: require('./coding.schema'),
			description: 'The note purpose: Print/Display.'
		},
		text: {
			type: GraphQLString,
			description: 'The note text.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'The note text.'
		}
	})
});
