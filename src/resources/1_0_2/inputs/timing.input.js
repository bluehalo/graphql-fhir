const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Timing Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Timing_Input',
	description: 'Base StructureDefinition for Timing Type.',
	fields: () => extendSchema(require('./element.input'), {
		event: {
			type: new GraphQLList(DateTimeScalar),
			description: 'Identifies specific times when the event occurs.'
		},
		_event: {
			type: require('./element.input'),
			description: 'Identifies specific times when the event occurs.'
		},
		repeat: {
			type: require('./timingrepeat.input'),
			description: 'A set of rules that describe when the event should occur.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/timing-abbreviation
		code: {
			type: require('./codeableconcept.input'),
			description: 'A code for the timing pattern. Some codes such as BID are ubiquitous, but many institutions define their own additional codes.'
		}
	})
});
