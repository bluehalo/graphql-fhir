const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Location Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Location_Input',
	description: 'Base StructureDefinition for Location Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Unique code or number identifying the location to its users.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/location-status
		status: {
			type: CodeScalar,
			description: 'active | suspended | inactive.'
		},
		_status: {
			type: require('./element.input'),
			description: 'active | suspended | inactive.'
		},
		name: {
			type: GraphQLString,
			description: 'Name of the location as used by humans. Does not need to be unique.'
		},
		_name: {
			type: require('./element.input'),
			description: 'Name of the location as used by humans. Does not need to be unique.'
		},
		description: {
			type: GraphQLString,
			description: 'Description of the Location, which helps in finding or referencing the place.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Description of the Location, which helps in finding or referencing the place.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/location-mode
		mode: {
			type: CodeScalar,
			description: 'Indicates whether a resource instance represents a specific location or a class of locations.'
		},
		_mode: {
			type: require('./element.input'),
			description: 'Indicates whether a resource instance represents a specific location or a class of locations.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ServiceDeliveryLocationRoleType
		type: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the type of function performed at the location.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.'
		},
		address: {
			type: require('./address.input'),
			description: 'Physical location.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/location-physical-type
		physicalType: {
			type: require('./codeableconcept.input'),
			description: 'Physical form of the location, e.g. building, room, vehicle, road.'
		},
		position: {
			type: require('./locationposition.input'),
			description: 'The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).'
		},
		managingOrganization: {
			type: require('./reference.input'),
			description: 'The organization responsible for the provisioning and upkeep of the location.'
		},
		partOf: {
			type: require('./reference.input'),
			description: 'Another Location which this Location is physically part of.'
		}
	})
});
