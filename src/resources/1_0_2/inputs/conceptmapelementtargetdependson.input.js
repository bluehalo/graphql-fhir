const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ConceptMapelementtargetdependsOn Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapelementtargetdependsOn_Input',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_element: {
			type: require('./element.input.js'),
			description:
				'A reference to a specific concept that holds a coded value. This can be an element in a FHIR resource, or a specific reference to a data element in a different specification (e.g. HL7 v2) or a general reference to a kind of data field, or a reference to a value set with an appropriately narrow definition.',
		},
		element: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'A reference to a specific concept that holds a coded value. This can be an element in a FHIR resource, or a specific reference to a data element in a different specification (e.g. HL7 v2) or a general reference to a kind of data field, or a reference to a value set with an appropriately narrow definition.',
		},
		_codeSystem: {
			type: require('./element.input.js'),
			description:
				'An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).',
		},
		codeSystem: {
			type: new GraphQLNonNull(UriScalar),
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
	}),
});
