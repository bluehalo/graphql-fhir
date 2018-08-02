const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimItemProsthesis Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimItemProsthesis',
	description: 'The materials and placement date of prior fixed prosthesis.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		initial: {
			type: GraphQLBoolean,
			description: 'Indicates whether this is the initial placement of a fixed prosthesis.'
		},
		_initial: {
			type: require('./element.schema'),
			description: 'Indicates whether this is the initial placement of a fixed prosthesis.'
		},
		priorDate: {
			type: DateScalar,
			description: 'Date of the initial placement.'
		},
		_priorDate: {
			type: require('./element.schema'),
			description: 'Date of the initial placement.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/oral-prosthodontic-material
		priorMaterial: {
			type: require('./coding.schema'),
			description: 'Material of the prior denture or bridge prosthesis. (Oral).'
		}
	})
});
