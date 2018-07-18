const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary StructureMapStructure Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapStructure_Input',
	description: 'A structure definition used by this map. The structure definition may describe instances that are converted, or the instances that are produced.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The canonical URL that identifies the structure.'
		},
		_url: {
			type: require('./element.input'),
			description: 'The canonical URL that identifies the structure.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/map-model-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How the referenced structure is used in this mapping.'
		},
		_mode: {
			type: require('./element.input'),
			description: 'How the referenced structure is used in this mapping.'
		},
		alias: {
			type: GraphQLString,
			description: 'The name used for this type in the map.'
		},
		_alias: {
			type: require('./element.input'),
			description: 'The name used for this type in the map.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Documentation that describes how the structure is used in the mapping.'
		},
		_documentation: {
			type: require('./element.input'),
			description: 'Documentation that describes how the structure is used in the mapping.'
		}
	})
});
