const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary CodeSystemfilter Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeSystemfilter_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_code: {
			type: require('./element.input.js'),
			description:
				'The code that identifies this filter when it is used in the instance.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The code that identifies this filter when it is used in the instance.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'A description of how or why the filter is used.',
		},
		description: {
			type: GraphQLString,
			description: 'A description of how or why the filter is used.',
		},
		_operator: {
			type: require('./element.input.js'),
			description: 'A list of operators that can be used with the filter.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/filter-operator
		operator: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description: 'A list of operators that can be used with the filter.',
		},
		_value: {
			type: require('./element.input.js'),
			description: 'A description of what the value for the filter should be.',
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A description of what the value for the filter should be.',
		},
	}),
});
