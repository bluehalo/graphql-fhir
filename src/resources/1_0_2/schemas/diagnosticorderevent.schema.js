const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DiagnosticOrderEvent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DiagnosticOrderEvent',
	description: 'A summary of the events of interest that have occurred as the request is processed; e.g. when the order was made, various processing steps (specimens received), when it was completed.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status for the event.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status for the event.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-event
		description: {
			type: require('./codeableconcept.schema'),
			description: 'Additional information about the event that occurred - e.g. if the status remained unchanged.'
		},
		dateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date/time at which the event occurred.'
		},
		_dateTime: {
			type: require('./element.schema'),
			description: 'The date/time at which the event occurred.'
		},
		actor: {
			type: require('./reference.schema'),
			description: 'The person responsible for performing or recording the action.'
		}
	})
});
