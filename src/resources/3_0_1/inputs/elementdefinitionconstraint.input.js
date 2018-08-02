const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ElementDefinitionConstraint Input Schema
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
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/constraint-severity
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
		expression: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A [FHIRPath](http://hl7.org/fluentpath) expression of constraint that can be executed to see if this constraint is met.'
		},
		_expression: {
			type: require('./element.input'),
			description: 'A [FHIRPath](http://hl7.org/fluentpath) expression of constraint that can be executed to see if this constraint is met.'
		},
		xpath: {
			type: GraphQLString,
			description: 'An XPath expression of constraint that can be executed to see if this constraint is met.'
		},
		_xpath: {
			type: require('./element.input'),
			description: 'An XPath expression of constraint that can be executed to see if this constraint is met.'
		},
		source: {
			type: UriScalar,
			description: 'A reference to the original source of the constraint, for traceability purposes.'
		},
		_source: {
			type: require('./element.input'),
			description: 'A reference to the original source of the constraint, for traceability purposes.'
		}
	})
});
