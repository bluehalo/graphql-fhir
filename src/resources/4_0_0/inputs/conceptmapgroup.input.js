const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ConceptMapgroup Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapgroup_Input',
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
		_source: {
			type: require('./element.input.js'),
			description:
				'An absolute URI that identifies the source system where the concepts to be mapped are defined.',
		},
		source: {
			type: UriScalar,
			description:
				'An absolute URI that identifies the source system where the concepts to be mapped are defined.',
		},
		_sourceVersion: {
			type: require('./element.input.js'),
			description:
				'The specific version of the code system, as determined by the code system authority.',
		},
		sourceVersion: {
			type: GraphQLString,
			description:
				'The specific version of the code system, as determined by the code system authority.',
		},
		_target: {
			type: require('./element.input.js'),
			description:
				'An absolute URI that identifies the target system that the concepts will be mapped to.',
		},
		target: {
			type: UriScalar,
			description:
				'An absolute URI that identifies the target system that the concepts will be mapped to.',
		},
		_targetVersion: {
			type: require('./element.input.js'),
			description:
				'The specific version of the code system, as determined by the code system authority.',
		},
		targetVersion: {
			type: GraphQLString,
			description:
				'The specific version of the code system, as determined by the code system authority.',
		},
		element: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./conceptmapgroupelement.input.js')),
			),
			description:
				'Mappings for an individual concept in the source to one or more concepts in the target.',
		},
		unmapped: {
			type: require('./conceptmapgroupunmapped.input.js'),
			description:
				"What to do when there is no mapping for the source concept. 'Unmapped' does not include codes that are unmatched, and the unmapped element is ignored in a code is specified to have equivalence = unmatched.",
		},
	}),
});
