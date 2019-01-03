const { GraphQLObjectType, GraphQLNonNull, GraphQLFloat } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Location.position Schema
 */
module.exports = new GraphQLObjectType({
	name: 'LocationPosition',
	description: 'The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		longitude: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).'
		},
		_longitude: {
			type: require('./element.schema'),
			description: 'Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).'
		},
		latitude: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).'
		},
		_latitude: {
			type: require('./element.schema'),
			description: 'Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).'
		},
		altitude: {
			type: GraphQLFloat,
			description: 'Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).'
		},
		_altitude: {
			type: require('./element.schema'),
			description: 'Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).'
		}
	})
});
