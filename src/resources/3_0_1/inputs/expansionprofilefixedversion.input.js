const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ExpansionProfilefixedVersion Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExpansionProfilefixedVersion_Input',
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
		_system: {
			type: require('./element.input.js'),
			description: 'The specific system for which to fix the version.',
		},
		system: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The specific system for which to fix the version.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The version of the code system from which codes in the expansion should be included.',
		},
		version: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The version of the code system from which codes in the expansion should be included.',
		},
		_mode: {
			type: require('./element.input.js'),
			description:
				'How to manage the intersection between a fixed version in a value set, and this fixed version of the system in the expansion profile.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/system-version-processing-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'How to manage the intersection between a fixed version in a value set, and this fixed version of the system in the expansion profile.',
		},
	}),
});
