const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary OperationDefinitionParameter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OperationDefinitionParameter',
	description: 'The parameters for the operation/query.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The name of used to identify the parameter.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'The name of used to identify the parameter.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/operation-parameter-use
		use: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Whether this is an input or an output parameter.'
		},
		_use: {
			type: require('./element.schema'),
			description: 'Whether this is an input or an output parameter.'
		},
		min: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'The minimum number of times this parameter SHALL appear in the request or response.'
		},
		_min: {
			type: require('./element.schema'),
			description: 'The minimum number of times this parameter SHALL appear in the request or response.'
		},
		max: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The maximum number of times this element is permitted to appear in the request or response.'
		},
		_max: {
			type: require('./element.schema'),
			description: 'The maximum number of times this element is permitted to appear in the request or response.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Describes the meaning or use of this parameter.'
		},
		_documentation: {
			type: require('./element.schema'),
			description: 'Describes the meaning or use of this parameter.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/all-types
		type: {
			type: CodeScalar,
			description: 'The type for this parameter.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type for this parameter.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/search-param-type
		searchType: {
			type: CodeScalar,
			description: 'How the parameter is understood as a search parameter. This is only used if the parameter type is \'string\'.'
		},
		_searchType: {
			type: require('./element.schema'),
			description: 'How the parameter is understood as a search parameter. This is only used if the parameter type is \'string\'.'
		},
		profile: {
			type: require('./reference.schema'),
			description: 'A profile the specifies the rules that this parameter must conform to.'
		},
		binding: {
			type: require('./operationdefinitionparameterbinding.schema'),
			description: 'Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).'
		}
	})
});
