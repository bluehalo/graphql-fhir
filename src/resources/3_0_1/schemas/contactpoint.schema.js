const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLString
} = require('graphql');

// Scalars
const PositiveIntScalar = require('../scalars/positiveint.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

let ContactPointSystemType = new GraphQLEnumType({
	name: 'ContactPointSystemType',
	values: {
		phone: { value: 'phone' },
		fax: { value: 'fax' },
		email: { value: 'email' },
		pager: { value: 'pager' },
		url: { value: 'url' },
		sms: { value: 'sms' },
		other: { value: 'other' }
	}
});

let ContactPointUseType = new GraphQLEnumType({
	name: 'ContactPointUseType',
	values: {
		home: { value: 'home' },
		work: { value: 'work' },
		temp: { value: 'temp' },
		old: { value: 'old' },
		mobile: { value: 'mobile' }
	}
});

/**
 * @name exports
 * @summary ContactPoint Fields
 */
let ContactPoint = new GraphQLObjectType({
	name: 'ContactPoint',
	description: 'Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.',
	fields: () => extendSchema(require('./element.schema'), {
		system: {
			type: ContactPointSystemType,
			description: 'Telecommunications form for contact point - what communications system is required to make use of the contact.'
		},
		_system: {
			type: require('./element.schema'),
			description: 'Extensions for system'
		},
		value: {
			type: GraphQLString,
			description: 'The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).'
		},
		_value: {
			type: require('./element.schema'),
			description: 'Extensions for value'
		},
		use: {
			type: ContactPointUseType,
			description: 'Identifies the purpose for the contact point.'
		},
		_use: {
			type: require('./element.schema'),
			description: 'Extensions for use'
		},
		rank: {
			type: PositiveIntScalar,
			description: 'Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.'
		},
		_rank: {
			type: require('./element.schema'),
			description: 'Extensions for rank'
		},
		period: {
			type: require('./period.schema'),
			description: 'Time period when the contact point was/is in use.'
		}
	})
});

module.exports = ContactPoint;
