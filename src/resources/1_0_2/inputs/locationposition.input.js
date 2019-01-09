const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Locationposition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Locationposition_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_longitude: {
			type: require('./element.input.js'),
			description:
				'Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).',
		},
		longitude: {
			type: new GraphQLNonNull(GraphQLFloat),
			description:
				'Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).',
		},
		_latitude: {
			type: require('./element.input.js'),
			description:
				'Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).',
		},
		latitude: {
			type: new GraphQLNonNull(GraphQLFloat),
			description:
				'Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).',
		},
		_altitude: {
			type: require('./element.input.js'),
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
