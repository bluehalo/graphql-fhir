const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PaymentReconciliationProcessNote Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PaymentReconciliationProcessNote_Input',
	description: 'Suite of notes.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
		type: {
			type: require('./codeableconcept.input'),
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
