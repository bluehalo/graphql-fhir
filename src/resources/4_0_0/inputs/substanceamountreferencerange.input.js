const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SubstanceAmountreferenceRange Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SubstanceAmountreferenceRange_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		lowLimit: {
			type: require('./quantity.input.js'),
			description: 'Lower limit possible or expected.',
		},
		highLimit: {
			type: require('./quantity.input.js'),
			description: 'Upper limit possible or expected.',
		},
	}),
});
