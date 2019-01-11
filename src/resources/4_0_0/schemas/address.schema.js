const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Address Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Address',
	description:
		'Base StructureDefinition for Address Type: An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.',
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
		_use: {
			type: require('./element.schema.js'),
			description: 'The purpose of this address.',
		},
		use: {
			type: CodeScalar,
			description: 'The purpose of this address.',
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.',
		},
		type: {
			type: CodeScalar,
			description:
				'Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.',
		},
		_text: {
			type: require('./element.schema.js'),
			description:
				'Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts.',
		},
		text: {
			type: GraphQLString,
			description:
				'Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts.',
		},
		_line: {
			type: require('./element.schema.js'),
			description:
				'This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.',
		},
		line: {
			type: new GraphQLList(GraphQLString),
			description:
				'This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.',
		},
		_city: {
			type: require('./element.schema.js'),
			description:
				'The name of the city, town, suburb, village or other community or delivery center.',
		},
		city: {
			type: GraphQLString,
			description:
				'The name of the city, town, suburb, village or other community or delivery center.',
		},
		_district: {
			type: require('./element.schema.js'),
			description: 'The name of the administrative area (county).',
		},
		district: {
			type: GraphQLString,
			description: 'The name of the administrative area (county).',
		},
		_state: {
			type: require('./element.schema.js'),
			description:
				'Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).',
		},
		state: {
			type: GraphQLString,
			description:
				'Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).',
		},
		_postalCode: {
			type: require('./element.schema.js'),
			description:
				'A postal code designating a region defined by the postal service.',
		},
		postalCode: {
			type: GraphQLString,
			description:
				'A postal code designating a region defined by the postal service.',
		},
		_country: {
			type: require('./element.schema.js'),
			description:
				'Country - a nation as commonly understood or generally accepted.',
		},
		country: {
			type: GraphQLString,
			description:
				'Country - a nation as commonly understood or generally accepted.',
		},
		period: {
			type: require('./period.schema.js'),
			description: 'Time period when address was/is in use.',
		},
	}),
});
