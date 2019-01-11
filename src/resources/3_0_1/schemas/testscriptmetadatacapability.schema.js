const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary TestScriptmetadatacapability Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptmetadatacapability',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		_required: {
			type: require('./element.schema.js'),
			description:
				'Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.',
		},
		required: {
			type: GraphQLBoolean,
			description:
				'Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.',
		},
		_validated: {
			type: require('./element.schema.js'),
			description:
				'Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.',
		},
		validated: {
			type: GraphQLBoolean,
			description:
				'Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'Description of the capabilities that this test script is requiring the server to support.',
		},
		description: {
			type: GraphQLString,
			description:
				'Description of the capabilities that this test script is requiring the server to support.',
		},
		_origin: {
			type: require('./element.schema.js'),
			description: 'Which origin server these requirements apply to.',
		},
		origin: {
			type: new GraphQLList(GraphQLInt),
			description: 'Which origin server these requirements apply to.',
		},
		_destination: {
			type: require('./element.schema.js'),
			description: 'Which server these requirements apply to.',
		},
		destination: {
			type: GraphQLInt,
			description: 'Which server these requirements apply to.',
		},
		_link: {
			type: require('./element.schema.js'),
			description:
				'Links to the FHIR specification that describes this interaction and the resources involved in more detail.',
		},
		link: {
			type: new GraphQLList(UriScalar),
			description:
				'Links to the FHIR specification that describes this interaction and the resources involved in more detail.',
		},
		capabilities: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'TestScriptmetadatacapabilitycapabilities_capabilities_Union',
					description:
						'Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped.',
					types: () => [require('./capabilitystatement.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'CapabilityStatement') {
							return require('./capabilitystatement.schema.js');
						}
					},
				}),
			),
			description:
				'Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped.',
		},
	}),
});
