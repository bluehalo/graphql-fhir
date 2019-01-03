const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ConceptMap.element Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConceptMapElement',
	description: 'Mappings for an individual concept in the source to one or more concepts in the target.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		codeSystem: {
			type: UriScalar,
			description: 'An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).'
		},
		_codeSystem: {
			type: require('./element.schema'),
			description: 'An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).'
		},
		code: {
			type: CodeScalar,
			description: 'Identity (code or path) or the element/item being mapped.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Identity (code or path) or the element/item being mapped.'
		},
		target: {
			type: new GraphQLList(require('./conceptmapelementtarget.schema')),
			description: 'A concept from the target value set that this concept maps to.'
		}
	})
});
