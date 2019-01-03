const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ElementDefinition.constraint Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionConstraint_Input',
	description: 'Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.',
	fields: () => extendSchema(require('./element.input'), {
		key: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.'
		},
		_key: {
			type: require('./element.input'),
			description: 'Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.'
		},
		requirements: {
			type: GraphQLString,
			description: 'Description of why this constraint is necessary or appropriate.'
		},
		_requirements: {
			type: require('./element.input'),
			description: 'Description of why this constraint is necessary or appropriate.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/constraint-severity
		severity: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies the impact constraint violation has on the conformance of the instance.'
		},
		_severity: {
			type: require('./element.input'),
			description: 'Identifies the impact constraint violation has on the conformance of the instance.'
		},
		human: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Text that can be used to describe the constraint in messages identifying that the constraint has been violated.'
		},
		_human: {
			type: require('./element.input'),
			description: 'Text that can be used to describe the constraint in messages identifying that the constraint has been violated.'
		},
		xpath: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'An XPath expression of constraint that can be executed to see if this constraint is met.'
		},
		_xpath: {
			type: require('./element.input'),
			description: 'An XPath expression of constraint that can be executed to see if this constraint is met.'
		}
	})
});
