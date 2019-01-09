const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary StructureDefinitionmapping Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureDefinitionmapping_Input',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_identity: {
			type: require('./element.input.js'),
			description:
				'An Internal id that is used to identify this mapping set when specific mappings are made.',
		},
		identity: {
			type: new GraphQLNonNull(IdScalar),
			description:
				'An Internal id that is used to identify this mapping set when specific mappings are made.',
		},
		_uri: {
			type: require('./element.input.js'),
			description:
				'An absolute URI that identifies the specification that this mapping is expressed to.',
		},
		uri: {
			type: UriScalar,
			description:
				'An absolute URI that identifies the specification that this mapping is expressed to.',
		},
		_name: {
			type: require('./element.input.js'),
			description: 'A name for the specification that is being mapped to.',
		},
		name: {
			type: GraphQLString,
			description: 'A name for the specification that is being mapped to.',
		},
		_comment: {
			type: require('./element.input.js'),
			description:
				'Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.',
		},
		comment: {
			type: GraphQLString,
			description:
				'Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.',
		},
	}),
});
