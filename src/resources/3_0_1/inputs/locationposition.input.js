const { GraphQLInputObjectType, GraphQLNonNull, GraphQLFloat } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Location.position Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'LocationPosition_Input',
	description: 'The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		longitude: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).'
		},
		_longitude: {
			type: require('./element.input'),
			description: 'Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).'
		},
		latitude: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).'
		},
		_latitude: {
			type: require('./element.input'),
			description: 'Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).'
		},
		altitude: {
			type: GraphQLFloat,
			description: 'Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).'
		},
		_altitude: {
			type: require('./element.input'),
			description: 'Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).'
		}
	})
});
