const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLString,
	GraphQLList
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

let AddressUseType = new GraphQLEnumType({
	name: 'AddressUseTypeInput',
	values: {
		home: { value: 'home' },
		work: { value: 'work' },
		temp: { value: 'temp' },
		old: { value: 'old' }
	}
});

let AddressTypeType = new GraphQLEnumType({
	name: 'AddressTypeTypeInput',
	values: {
		both: { value: 'both' },
		postal: { value: 'postal' },
		physical: { value: 'physical' }
	}
});

/**
 * @name exports
 * @summary Address Fields
 */
let AddressInput = new GraphQLInputObjectType({
	name: 'AddressInput',
	description: 'An address expressed using postal conventions (as opposed to GPS or other location definition formats).'
		+ ' This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.'
		+ ' There are a variety of postal address formats defined around the world.',
	fields: () => extendSchema(require('./element.input'), {
		use: {
			type: AddressUseType,
			description: 'The purpose of this address.'
		},
		_use: {
			type: require('./extension.input'),
			description: 'Extensions for use'
		},
		type: {
			type: AddressTypeType,
			description: 'Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.'
		},
		_type: {
			type: require('./extension.input'),
			description: 'Extensions for type'
		},
		text: {
			type: GraphQLString,
			description: 'A full text representation of the address.'
		},
		_text: {
			type: require('./extension.input'),
			description: 'Extensions for text'
		},
		line: {
			type: new GraphQLList(GraphQLString),
			description: 'This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.'
		},
		_line: {
			type: require('./extension.input'),
			description: 'Extensions for line'
		},
		city: {
			type: GraphQLString,
			description: 'The name of the city, town, village or other community or delivery center.'
		},
		_city: {
			type: require('./extension.input'),
			description: 'Extensions for city'
		},
		district: {
			type: GraphQLString,
			description: 'The name of the administrative area (county).'
		},
		_district: {
			type: require('./extension.input'),
			description: 'Extensions for district'
		},
		state: {
			type: GraphQLString,
			description: 'Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).'
		},
		_state: {
			type: require('./extension.input'),
			description: 'Extensions for state'
		},
		postalCode: {
			type: GraphQLString,
			description: 'A postal code designating a region defined by the postal service.'
		},
		_postalCode: {
			type: require('./extension.input'),
			description: 'Extensions for postalCode'
		},
		country: {
			type: GraphQLString,
			description: 'Country - a nation as commonly understood or generally accepted (e.g. can be ISO 3166 2 or 3 letter code).'
		},
		_country: {
			type: require('./extension.input'),
			description: 'Extensions for country'
		},
		period: {
			type: require('./period.input'),
			description: 'Time period when address was/is in use.'
		}
	})
});

module.exports = AddressInput;
