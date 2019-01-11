const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ElementDefinitionslicingdiscriminator Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionslicingdiscriminator_Input',
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
		_type: {
			type: require('./element.input.js'),
			description:
				'How the element value is interpreted when discrimination is evaluated.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'How the element value is interpreted when discrimination is evaluated.',
		},
		_path: {
			type: require('./element.input.js'),
			description:
				'A FHIRPath expression, using [the simple subset of FHIRPath](fhirpath.html#simple), that is used to identify the element on which discrimination is based.',
		},
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A FHIRPath expression, using [the simple subset of FHIRPath](fhirpath.html#simple), that is used to identify the element on which discrimination is based.',
		},
	}),
});
