const {
	GraphQLObjectType,
	GraphQLList
} = require('graphql');

const DateTimeScalar = require('../scalars/datetime.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Timing Fields
 */
let Timing = new GraphQLObjectType({
	name: 'Timing',
	description: 'A time period defined by a start and end date and optionally time.',
	fields: () => extendSchema(require('./element.schema'), {
		event: {
			type: new GraphQLList(DateTimeScalar),
			description: 'Identifies specific times when the event occurs.'
		},
		_event: {
			type: require('./element.schema'),
			description: 'Extensions for event'
		},
		repeat: {
			type: require('./timingrepeat.schema'),
			description: 'A set of rules that describe when the event is scheduled.'
		},
		code: {
			type: require('./codeableconcept.schema'),
			description: 'A code for the timing schedule.'
				+ ' Some codes such as BID are ubiquitous, but many institutions define their own additional codes.'
				+ ' If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).'
		}
	})
});

module.exports = Timing;
