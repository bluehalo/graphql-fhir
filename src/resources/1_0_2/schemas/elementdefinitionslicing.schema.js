const {
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ElementDefinitionslicing Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ElementDefinitionslicing',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_discriminator: {
			type: require('./element.schema.js'),
			description:
				'Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.',
		},
		discriminator: {
			type: new GraphQLList(GraphQLString),
			description:
				'Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.',
		},
		description: {
			type: GraphQLString,
			description:
				'A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.',
		},
		_ordered: {
			type: require('./element.schema.js'),
			description:
				'If the matching elements have to occur in the same order as defined in the profile.',
		},
		ordered: {
			type: GraphQLBoolean,
			description:
				'If the matching elements have to occur in the same order as defined in the profile.',
		},
		_rules: {
			type: require('./element.schema.js'),
			description:
				'Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-slicing-rules
		rules: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.',
		},
	}),
});
