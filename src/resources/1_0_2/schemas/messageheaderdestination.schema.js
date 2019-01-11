const {
	GraphQLList,
	GraphQLString,
	GraphQLUnionType,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary MessageHeaderdestination Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageHeaderdestination',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
			description: 'Human-readable name for the target system.',
		},
		name: {
			type: GraphQLString,
			description: 'Human-readable name for the target system.',
		},
		target: {
			type: new GraphQLUnionType({
				name: 'MessageHeaderdestinationtarget_target_Union',
				description:
					'Identifies the target end system in situations where the initial message transmission is to an intermediary system.',
				types: () => [require('./device.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description:
				'Identifies the target end system in situations where the initial message transmission is to an intermediary system.',
		},
		_endpoint: {
			type: require('./element.schema.js'),
			description: 'Indicates where the message should be routed to.',
		},
		endpoint: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Indicates where the message should be routed to.',
		},
	}),
});
