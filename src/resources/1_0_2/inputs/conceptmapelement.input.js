const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConceptMap.element Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapElement_Input',
	description: 'Mappings for an individual concept in the source to one or more concepts in the target.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		codeSystem: {
			type: UriScalar,
			description: 'An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).'
		},
		_codeSystem: {
			type: require('./element.input'),
			description: 'An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).'
		},
		code: {
			type: CodeScalar,
			description: 'Identity (code or path) or the element/item being mapped.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Identity (code or path) or the element/item being mapped.'
		},
		target: {
			type: new GraphQLList(require('./conceptmapelementtarget.input')),
			description: 'A concept from the target value set that this concept maps to.'
		}
	})
});
