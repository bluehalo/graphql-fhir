const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary CapabilityStatementsoftware Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementsoftware',
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
		_name: {
			type: require('./element.schema.js'),
			description: 'Name software is known by.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Name software is known by.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The version identifier for the software covered by this statement.',
		},
		version: {
			type: GraphQLString,
			description:
				'The version identifier for the software covered by this statement.',
		},
		_releaseDate: {
			type: require('./element.schema.js'),
			description: 'Date this version of the software was released.',
		},
		releaseDate: {
			type: DateTimeScalar,
			description: 'Date this version of the software was released.',
		},
	}),
});
