const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Locationposition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Locationposition',
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
		_longitude: {
			type: require('./element.schema.js'),
			description:
				'Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).',
		},
		longitude: {
			type: new GraphQLNonNull(GraphQLFloat),
			description:
				'Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).',
		},
		_latitude: {
			type: require('./element.schema.js'),
			description:
				'Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).',
		},
		latitude: {
			type: new GraphQLNonNull(GraphQLFloat),
			description:
				'Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).',
		},
		_altitude: {
			type: require('./element.schema.js'),
			description:
				'Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).',
		},
		altitude: {
			type: GraphQLFloat,
			description:
				'Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).',
		},
	}),
});
