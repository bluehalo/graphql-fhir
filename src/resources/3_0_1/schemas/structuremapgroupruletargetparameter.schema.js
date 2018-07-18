const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary StructureMapGroupRuleTargetParameter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureMapGroupRuleTargetParameter',
	description: 'Parameters to the transform.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		valueId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Parameter value - variable or literal.'
		},
		_valueId: {
			type: require('./element.schema'),
			description: 'Parameter value - variable or literal.'
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Parameter value - variable or literal.'
		},
		_valueString: {
			type: require('./element.schema'),
			description: 'Parameter value - variable or literal.'
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Parameter value - variable or literal.'
		},
		_valueBoolean: {
			type: require('./element.schema'),
			description: 'Parameter value - variable or literal.'
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Parameter value - variable or literal.'
		},
		_valueInteger: {
			type: require('./element.schema'),
			description: 'Parameter value - variable or literal.'
		},
		valueDecimal: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'Parameter value - variable or literal.'
		},
		_valueDecimal: {
			type: require('./element.schema'),
			description: 'Parameter value - variable or literal.'
		}
	})
});
