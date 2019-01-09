const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

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
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_path: {
			type: require('./element.input.js'),
			description:
				'The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.',
		},
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.',
		},
		_min: {
			type: require('./element.input.js'),
			description:
				'Minimum cardinality of the base element identified by the path.',
		},
		min: {
			type: new GraphQLNonNull(GraphQLInt),
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
