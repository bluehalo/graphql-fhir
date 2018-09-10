const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponse.note Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseNote_Input',
	description: 'Note text.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		number: {
			type: PositiveIntScalar,
			description: 'An integer associated with each note which may be referred to from each service line item.'
		},
		_number: {
			type: require('./element.input'),
			description: 'An integer associated with each note which may be referred to from each service line item.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
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
