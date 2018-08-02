const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConceptMapGroupElement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapGroupElement_Input',
	description: 'Mappings for an individual concept in the source to one or more concepts in the target.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		code: {
			type: CodeScalar,
			description: 'Identity (code or path) or the element/item being mapped.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Identity (code or path) or the element/item being mapped.'
		},
		display: {
			type: GraphQLString,
			description: 'The display for the code. The display is only provided to help editors when editing the concept map.'
		},
		_display: {
			type: require('./element.input'),
			description: 'The display for the code. The display is only provided to help editors when editing the concept map.'
		},
		target: {
			type: new GraphQLList(require('./conceptmapgroupelementtarget.input')),
			description: 'A concept from the target value set that this concept maps to.'
		}
	})
});
