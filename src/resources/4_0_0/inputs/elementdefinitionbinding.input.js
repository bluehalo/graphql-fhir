const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary ElementDefinitionbinding Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionbinding_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_strength: {
			type: require('./element.input.js'),
			description:
				'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.',
		},
		strength: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'Describes the intended use of this particular set of codes.',
		},
		description: {
			type: GraphQLString,
			description:
				'Describes the intended use of this particular set of codes.',
		},
		_valueSet: {
			type: require('./element.input.js'),
			description:
				'Refers to the value set that identifies the set of codes the binding refers to.',
		},
		valueSet: {
			type: CanonicalScalar,
			description:
				'Refers to the value set that identifies the set of codes the binding refers to.',
		},
	}),
});
