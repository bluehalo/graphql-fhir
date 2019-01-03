const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ConceptMap.group.element Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConceptMapGroupElement',
	description: 'Mappings for an individual concept in the source to one or more concepts in the target.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		code: {
			type: CodeScalar,
			description: 'Identity (code or path) or the element/item being mapped.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Identity (code or path) or the element/item being mapped.'
		},
		display: {
			type: GraphQLString,
			description: 'The display for the code. The display is only provided to help editors when editing the concept map.'
		},
		_display: {
			type: require('./element.schema'),
			description: 'The display for the code. The display is only provided to help editors when editing the concept map.'
		},
		target: {
			type: new GraphQLList(require('./conceptmapgroupelementtarget.schema')),
			description: 'A concept from the target value set that this concept maps to.'
		}
	})
});
