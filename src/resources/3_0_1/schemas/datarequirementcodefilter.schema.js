const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary DataRequirement.codeFilter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DataRequirementCodeFilter',
	description: 'Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.',
	fields: () => extendSchema(require('./element.schema'), {
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The code-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.'
		},
		_path: {
			type: require('./element.schema'),
			description: 'The code-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.'
		},
		valueSetString: {
			type: GraphQLString,
			description: 'The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.'
		},
		_valueSetString: {
			type: require('./element.schema'),
			description: 'The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.'
		},
		valueSetReference: {
			type: require('./reference.schema'),
			description: 'The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.'
		},
		valueCode: {
			type: new GraphQLList(CodeScalar),
			description: 'The codes for the code filter. Only one of valueSet, valueCode, valueCoding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes.'
		},
		_valueCode: {
			type: require('./element.schema'),
			description: 'The codes for the code filter. Only one of valueSet, valueCode, valueCoding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes.'
		},
		valueCoding: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'The Codings for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified Codings.'
		},
		valueCodeableConcept: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The CodeableConcepts for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified CodeableConcepts.'
		}
	})
});
