const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary GraphDefinitionLinkTargetCompartment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'GraphDefinitionLinkTargetCompartment',
	description: 'Compartment Consistency Rules.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/compartment-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies the compartment.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Identifies the compartment.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/graph-compartment-rule
		rule: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'identical | matching | different | no-rule | custom.'
		},
		_rule: {
			type: require('./element.schema'),
			description: 'identical | matching | different | no-rule | custom.'
		},
		expression: {
			type: GraphQLString,
			description: 'Custom rule, as a FHIRPath expression.'
		},
		_expression: {
			type: require('./element.schema'),
			description: 'Custom rule, as a FHIRPath expression.'
		},
		description: {
			type: GraphQLString,
			description: 'Documentation for FHIRPath expression.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Documentation for FHIRPath expression.'
		}
	})
});
