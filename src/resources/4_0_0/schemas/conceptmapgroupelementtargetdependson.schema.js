const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary ConceptMapgroupelementtargetdependsOn Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConceptMapgroupelementtargetdependsOn',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_property: {
			type: require('./element.schema.js'),
			description:
				'A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.',
		},
		property: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.',
		},
		_system: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).',
		},
		system: {
			type: CanonicalScalar,
			description:
				'An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).',
		},
		_value: {
			type: require('./element.schema.js'),
			description:
				'Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.',
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.',
		},
		_display: {
			type: require('./element.schema.js'),
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
