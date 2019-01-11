const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary DataRequirement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DataRequirement_Input',
	description: 'Base StructureDefinition for DataRequirement Type',
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
		_type: {
			type: require('./element.input.js'),
			description:
				'The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/all-types
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.',
		},
		_profile: {
			type: require('./element.input.js'),
			description:
				'The profile of the required data, specified as the uri of the profile definition.',
		},
		profile: {
			type: new GraphQLList(UriScalar),
			description:
				'The profile of the required data, specified as the uri of the profile definition.',
		},
		_mustSupport: {
			type: require('./element.input.js'),
			description:
				'Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported.',
		},
		mustSupport: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported.',
		},
		codeFilter: {
			type: new GraphQLList(require('./element.input.js')),
			description:
				'Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.',
		},
		dateFilter: {
			type: new GraphQLList(require('./element.input.js')),
			description:
				'Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.',
		},
	}),
});
