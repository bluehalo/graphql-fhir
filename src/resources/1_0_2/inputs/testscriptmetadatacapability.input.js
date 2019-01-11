const {
	GraphQLList,
	GraphQLBoolean,
	GraphQLString,
	GraphQLInt,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary TestScriptmetadatacapability Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptmetadatacapability_Input',
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
		_required: {
			type: require('./element.input.js'),
			description:
				'Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.',
		},
		required: {
			type: GraphQLBoolean,
			description:
				'Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.',
		},
		_validated: {
			type: require('./element.input.js'),
			description:
				'Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.',
		},
		validated: {
			type: GraphQLBoolean,
			description:
				'Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'Description of the capabilities that this test script is requiring the server to support.',
		},
		description: {
			type: GraphQLString,
			description:
				'Description of the capabilities that this test script is requiring the server to support.',
		},
		_destination: {
			type: require('./element.input.js'),
			description: 'Which server these requirements apply to.',
		},
		destination: {
			type: GraphQLInt,
			description: 'Which server these requirements apply to.',
		},
		_link: {
			type: require('./element.input.js'),
			description:
				'Links to the FHIR specification that describes this interaction and the resources involved in more detail.',
		},
		link: {
			type: new GraphQLList(UriScalar),
			description:
				'Links to the FHIR specification that describes this interaction and the resources involved in more detail.',
		},
		conformance: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Minimum conformance required of server for test script to execute successfully.   If server does not meet at a minimum the reference conformance definition, then all tests in this script are skipped.',
		},
	}),
});
