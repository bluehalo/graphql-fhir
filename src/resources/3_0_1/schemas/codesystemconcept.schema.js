const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary CodeSystem.concept Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CodeSystemConcept',
	description: 'Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code - a text symbol - that uniquely identifies the concept within the code system.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'A code - a text symbol - that uniquely identifies the concept within the code system.'
		},
		display: {
			type: GraphQLString,
			description: 'A human readable string that is the recommended default way to present this concept to a user.'
		},
		_display: {
			type: require('./element.schema'),
			description: 'A human readable string that is the recommended default way to present this concept to a user.'
		},
		definition: {
			type: GraphQLString,
			description: 'The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.'
		},
		_definition: {
			type: require('./element.schema'),
			description: 'The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.'
		},
		designation: {
			type: new GraphQLList(require('./codesystemconceptdesignation.schema')),
			description: 'Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.'
		},
		property: {
			type: new GraphQLList(require('./codesystemconceptproperty.schema')),
			description: 'A property value for this concept.'
		}
	})
});
