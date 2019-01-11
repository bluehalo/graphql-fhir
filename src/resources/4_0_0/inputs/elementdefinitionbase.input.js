const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary ElementDefinitionbase Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ElementDefinitionbase_Input',
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
		_path: {
			type: require('./element.input.js'),
			description:
				'The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.',
		},
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.',
		},
		_min: {
			type: require('./element.input.js'),
			description:
				'Minimum cardinality of the base element identified by the path.',
		},
		min: {
			type: new GraphQLNonNull(UnsignedIntScalar),
			description:
				'Minimum cardinality of the base element identified by the path.',
		},
		_max: {
			type: require('./element.input.js'),
			description:
				'Maximum cardinality of the base element identified by the path.',
		},
		max: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Maximum cardinality of the base element identified by the path.',
		},
	}),
});
