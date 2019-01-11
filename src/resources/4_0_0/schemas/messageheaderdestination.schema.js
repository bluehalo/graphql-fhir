const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const UrlScalar = require('../scalars/url.scalar.js');

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
			type: new GraphQLNonNull(UrlScalar),
			description: 'Indicates where the message should be routed to.',
		},
		receiver: {
			type: new GraphQLUnionType({
				name: 'MessageHeaderdestinationreceiver_receiver_Union',
				description:
					"Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.",
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				"Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.",
		},
	}),
});
