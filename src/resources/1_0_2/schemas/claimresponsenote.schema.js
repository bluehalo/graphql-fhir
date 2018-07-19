const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponseNote Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseNote',
	description: 'Note text.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		number: {
			type: PositiveIntScalar,
			description: 'An integer associated with each note which may be referred to from each service line item.'
		},
		_number: {
			type: require('./element.schema'),
			description: 'An integer associated with each note which may be referred to from each service line item.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/note-type
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
