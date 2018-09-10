const IdScalar = require('../scalars/id.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DataElement.mapping Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DataElementMapping',
	description: 'Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identity: {
			type: new GraphQLNonNull(IdScalar),
			description: 'An internal id that is used to identify this mapping set when specific mappings are made on a per-element basis.'
		},
		_identity: {
			type: require('./element.schema'),
			description: 'An internal id that is used to identify this mapping set when specific mappings are made on a per-element basis.'
		},
		uri: {
			type: UriScalar,
			description: 'An absolute URI that identifies the specification that this mapping is expressed to.'
		},
		_uri: {
			type: require('./element.schema'),
			description: 'An absolute URI that identifies the specification that this mapping is expressed to.'
		},
		name: {
			type: GraphQLString,
			description: 'A name for the specification that is being mapped to.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A name for the specification that is being mapped to.'
		},
		comment: {
			type: GraphQLString,
			description: 'Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.'
		},
		_comment: {
			type: require('./element.schema'),
			description: 'Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.'
		}
	})
});
