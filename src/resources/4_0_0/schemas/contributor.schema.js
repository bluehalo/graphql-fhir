const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Contributor Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Contributor',
	description:
		'Base StructureDefinition for Contributor Type: A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.',
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
		_type: {
			type: require('./element.schema.js'),
			description: 'The type of contributor.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of contributor.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'The name of the individual or organization responsible for the contribution.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The name of the individual or organization responsible for the contribution.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the contributor.',
		},
	}),
});
