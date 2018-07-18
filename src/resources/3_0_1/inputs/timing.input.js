const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

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
			description: 'A set of rules that describe when the event is scheduled.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/timing-abbreviation
		code: {
			type: require('./codeableconcept.input'),
			description: 'A code for the timing schedule. Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).'
		}
	})
});
