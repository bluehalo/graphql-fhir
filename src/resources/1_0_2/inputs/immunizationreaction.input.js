const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImmunizationReaction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationReaction_Input',
	description: 'Categorical data indicating that an adverse event is associated in time to an immunization.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		date: {
			type: DateTimeScalar,
			description: 'Date of reaction to the immunization.'
		},
		_date: {
			type: require('./element.input'),
			description: 'Date of reaction to the immunization.'
		},
		detail: {
			type: require('./reference.input'),
			description: 'Details of the reaction.'
		},
		reported: {
			type: GraphQLBoolean,
			description: 'Self-reported indicator.'
		},
		_reported: {
			type: require('./element.input'),
			description: 'Self-reported indicator.'
		}
	})
});
