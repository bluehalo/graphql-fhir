const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImplementationGuideDependency Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImplementationGuideDependency',
	description: 'Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/guide-dependency-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How the dependency is represented when the guide is published.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'How the dependency is represented when the guide is published.'
		},
		uri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Where the dependency is located.'
		},
		_uri: {
			type: require('./element.schema'),
			description: 'Where the dependency is located.'
		}
	})
});
