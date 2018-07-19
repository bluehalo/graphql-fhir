const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary GraphDefinitionLinkTargetCompartment Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'GraphDefinitionLinkTargetCompartment_Input',
	description: 'Compartment Consistency Rules.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/compartment-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies the compartment.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Identifies the compartment.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/graph-compartment-rule
		rule: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'identical | matching | different | no-rule | custom.'
		},
		_rule: {
			type: require('./element.input'),
			description: 'identical | matching | different | no-rule | custom.'
		},
		expression: {
			type: GraphQLString,
			description: 'Custom rule, as a FHIRPath expression.'
		},
		_expression: {
			type: require('./element.input'),
			description: 'Custom rule, as a FHIRPath expression.'
		},
		description: {
			type: GraphQLString,
			description: 'Documentation for FHIRPath expression.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Documentation for FHIRPath expression.'
		}
	})
});
