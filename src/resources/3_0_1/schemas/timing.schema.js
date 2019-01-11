const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Timing Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Timing',
	description: 'Base StructureDefinition for Timing Type',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_event: {
			type: require('./element.schema.js'),
			description: 'Identifies specific times when the event occurs.',
		},
		event: {
			type: new GraphQLList(DateTimeScalar),
			description: 'Identifies specific times when the event occurs.',
		},
		repeat: {
			type: require('./element.schema.js'),
			description: 'A set of rules that describe when the event is scheduled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/timing-abbreviation
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code for the timing schedule. Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).',
		},
	}),
});
