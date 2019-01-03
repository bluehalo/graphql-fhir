const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary DataRequirement Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DataRequirement',
	description: 'Base StructureDefinition for DataRequirement Type.',
	fields: () => extendSchema(require('./element.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/all-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.'
		},
		profile: {
			type: new GraphQLList(UriScalar),
			description: 'The profile of the required data, specified as the uri of the profile definition.'
		},
		_profile: {
			type: require('./element.schema'),
			description: 'The profile of the required data, specified as the uri of the profile definition.'
		},
		mustSupport: {
			type: new GraphQLList(GraphQLString),
			description: 'Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported.'
		},
		_mustSupport: {
			type: require('./element.schema'),
			description: 'Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported.'
		},
		codeFilter: {
			type: new GraphQLList(require('./datarequirementcodefilter.schema')),
			description: 'Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.'
		},
		dateFilter: {
			type: new GraphQLList(require('./datarequirementdatefilter.schema')),
			description: 'Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.'
		}
	})
});
