const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Timing Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Timing',
	description: 'Base StructureDefinition for Timing Type.',
	fields: () => extendSchema({
		event: {
			type: new GraphQLList(DateTimeScalar),
			description: 'Identifies specific times when the event occurs.'
		},
		_event: {
			type: require('./element.schema'),
			description: 'Identifies specific times when the event occurs.'
		},
		repeat: {
			type: require('./timingrepeat.schema'),
			description: 'A set of rules that describe when the event should occur.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/timing-abbreviation
		code: {
			type: require('./codeableconcept.schema'),
			description: 'A code for the timing pattern. Some codes such as BID are ubiquitous, but many institutions define their own additional codes.'
		}
	})
});
