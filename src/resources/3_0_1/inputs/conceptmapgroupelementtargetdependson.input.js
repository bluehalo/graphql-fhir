const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ConceptMapgroupelementtargetdependsOn Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapgroupelementtargetdependsOn_Input',
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
		_property: {
			type: require('./element.input.js'),
			description:
				'A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somwhere that is labeled to correspond with a code system property.',
		},
		property: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somwhere that is labeled to correspond with a code system property.',
		},
		_system: {
			type: require('./element.input.js'),
			description:
				'An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).',
		},
		system: {
			type: UriScalar,
			description:
				'An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).',
		},
		_code: {
			type: require('./element.input.js'),
			description:
				'Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.',
		},
		code: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.',
		},
		_display: {
			type: require('./element.input.js'),
			description:
				'The display for the code. The display is only provided to help editors when editing the concept map.',
		},
		display: {
			type: GraphQLString,
			description:
				'The display for the code. The display is only provided to help editors when editing the concept map.',
		},
	}),
});
