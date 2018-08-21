const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimItemProsthesis Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimItemProsthesis_Input',
	description: 'The materials and placement date of prior fixed prosthesis.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		initial: {
			type: GraphQLBoolean,
			description: 'Indicates whether this is the initial placement of a fixed prosthesis.'
		},
		_initial: {
			type: require('./element.input'),
			description: 'Indicates whether this is the initial placement of a fixed prosthesis.'
		},
		priorDate: {
			type: DateScalar,
			description: 'Date of the initial placement.'
		},
		_priorDate: {
			type: require('./element.input'),
			description: 'Date of the initial placement.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/oral-prosthodontic-material
		priorMaterial: {
			type: require('./coding.input'),
			description: 'Material of the prior denture or bridge prosthesis. (Oral).'
		}
	})
});
