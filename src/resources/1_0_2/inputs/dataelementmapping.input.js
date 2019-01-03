const IdScalar = require('../scalars/id.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary DataElement.mapping Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DataElementMapping_Input',
	description: 'Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identity: {
			type: new GraphQLNonNull(IdScalar),
			description: 'An internal id that is used to identify this mapping set when specific mappings are made on a per-element basis.'
		},
		_identity: {
			type: require('./element.input'),
			description: 'An internal id that is used to identify this mapping set when specific mappings are made on a per-element basis.'
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
