const IdScalar = require('../scalars/id.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary StructureDefinition.mapping Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureDefinitionMapping_Input',
	description: 'An external specification that the content is mapped to.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identity: {
			type: new GraphQLNonNull(IdScalar),
			description: 'An Internal id that is used to identify this mapping set when specific mappings are made.'
		},
		_identity: {
			type: require('./element.input'),
			description: 'An Internal id that is used to identify this mapping set when specific mappings are made.'
		},
		uri: {
			type: UriScalar,
			description: 'An absolute URI that identifies the specification that this mapping is expressed to.'
		},
		_uri: {
			type: require('./element.input'),
			description: 'An absolute URI that identifies the specification that this mapping is expressed to.'
		},
		name: {
			type: GraphQLString,
			description: 'A name for the specification that is being mapped to.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A name for the specification that is being mapped to.'
		},
		comments: {
			type: GraphQLString,
			description: 'Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.'
		},
		_comments: {
			type: require('./element.input'),
			description: 'Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.'
		}
	})
});
