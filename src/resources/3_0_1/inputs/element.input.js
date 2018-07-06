const {
	GraphQLInputObjectType,
	GraphQLString
} = require('graphql');

/**
 * @name exports
 * @summary Extension Fields
 */
let ElementInput = new GraphQLInputObjectType({
	name: 'ElementInput',
	description: 'Base definition for all elements in a resource.',
	fields: () => ({
		id: {
			type: GraphQLString,
			description: 'unique id for the element within a resource (for internal references).'
				+ ' This may be any string value that does not contain spaces.'
		},
		extension: {
			type: require('./extension.input'),
			description: 'May be used to represent additional information that is not part of the basic definition of the element.'
				+ ' In order to make the use of extensions safe and manageable, there is a strict set of governance'
				+ ' applied to the definition and use of extensions. Though any implementer is allowed to define an extension,'
				+ ' there is a set of requirements that SHALL be met as part of the definition of the extension.'
		}
	})
});

module.exports = ElementInput;
