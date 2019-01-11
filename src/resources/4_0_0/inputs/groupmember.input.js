const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Groupmember Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Groupmember_Input',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		entity: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.',
		},
		period: {
			type: require('./period.input.js'),
			description: 'The period that the member was in the group, if known.',
		},
		_inactive: {
			type: require('./element.input.js'),
			description:
				'A flag to indicate that the member is no longer in the group, but previously may have been a member.',
		},
		inactive: {
			type: GraphQLBoolean,
			description:
				'A flag to indicate that the member is no longer in the group, but previously may have been a member.',
		},
	}),
});
