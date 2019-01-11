const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary TestScriptfixture Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptfixture',
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
		_autocreate: {
			type: require('./element.schema.js'),
			description:
				'Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.',
		},
		autocreate: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.',
		},
		_autodelete: {
			type: require('./element.schema.js'),
			description:
				'Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.',
		},
		autodelete: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.',
		},
		resource: {
			type: new GraphQLUnionType({
				name: 'TestScriptfixtureresource_resource_Union',
				description:
					'Reference to the resource (containing the contents of the resource needed for operations).',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'Reference to the resource (containing the contents of the resource needed for operations).',
		},
	}),
});
