const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Location Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Location',
	description: 'Base StructureDefinition for Location Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Unique code or number identifying the location to its users.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/location-status
		status: {
			type: CodeScalar,
			description: 'active | suspended | inactive.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'active | suspended | inactive.'
		},
		name: {
			type: GraphQLString,
			description: 'Name of the location as used by humans. Does not need to be unique.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Name of the location as used by humans. Does not need to be unique.'
		},
		description: {
			type: GraphQLString,
			description: 'Description of the Location, which helps in finding or referencing the place.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Description of the Location, which helps in finding or referencing the place.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/location-mode
		mode: {
			type: CodeScalar,
			description: 'Indicates whether a resource instance represents a specific location or a class of locations.'
		},
		_mode: {
			type: require('./element.schema'),
			description: 'Indicates whether a resource instance represents a specific location or a class of locations.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ServiceDeliveryLocationRoleType
		type: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates the type of function performed at the location.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.'
		},
		address: {
			type: require('./address.schema'),
			description: 'Physical location.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/location-physical-type
		physicalType: {
			type: require('./codeableconcept.schema'),
			description: 'Physical form of the location, e.g. building, room, vehicle, road.'
		},
		position: {
			type: require('./locationposition.schema'),
			description: 'The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).'
		},
		managingOrganization: {
			type: require('./reference.schema'),
			description: 'The organization responsible for the provisioning and upkeep of the location.'
		},
		partOf: {
			type: require('./reference.schema'),
			description: 'Another Location which this Location is physically part of.'
		}
	})
});
