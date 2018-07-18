const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary PaymentReconciliationNote Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PaymentReconciliationNote_Input',
	description: 'Suite of notes.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
		type: {
			type: require('./coding.input'),
			description: 'The note purpose: Print/Display.'
		},
		text: {
			type: GraphQLString,
			description: 'The note text.'
		},
		_text: {
			type: require('./element.input'),
			description: 'The note text.'
		}
	})
});
