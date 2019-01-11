const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary GraphDefinitionlinktargetcompartment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'GraphDefinitionlinktargetcompartment',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_code: {
			type: require('./element.schema.js'),
			description: 'Identifies the compartment.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/compartment-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies the compartment.',
		},
		_rule: {
			type: require('./element.schema.js'),
			description: 'identical | matching | different | no-rule | custom.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/graph-compartment-rule
		rule: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'identical | matching | different | no-rule | custom.',
		},
		_expression: {
			type: require('./element.schema.js'),
			description: 'Custom rule, as a FHIRPath expression.',
		},
		expression: {
			type: GraphQLString,
			description: 'Custom rule, as a FHIRPath expression.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'Documentation for FHIRPath expression.',
		},
		description: {
			type: GraphQLString,
			description: 'Documentation for FHIRPath expression.',
		},
	}),
});
