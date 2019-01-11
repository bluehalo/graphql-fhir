const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary StructureDefinitionmapping Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureDefinitionmapping',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_identity: {
			type: require('./element.schema.js'),
			description:
				'An Internal id that is used to identify this mapping set when specific mappings are made.',
		},
		identity: {
			type: new GraphQLNonNull(IdScalar),
			description:
				'An Internal id that is used to identify this mapping set when specific mappings are made.',
		},
		_uri: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that identifies the specification that this mapping is expressed to.',
		},
		uri: {
			type: UriScalar,
			description:
				'An absolute URI that identifies the specification that this mapping is expressed to.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'A name for the specification that is being mapped to.',
		},
		name: {
			type: GraphQLString,
			description: 'A name for the specification that is being mapped to.',
		},
		_comments: {
			type: require('./element.schema.js'),
			description:
				'Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.',
		},
		comments: {
			type: GraphQLString,
			description:
				'Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.',
		},
	}),
});
