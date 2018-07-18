const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DiagnosticOrderEvent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DiagnosticOrderEvent_Input',
	description: 'A summary of the events of interest that have occurred as the request is processed; e.g. when the order was made, various processing steps (specimens received), when it was completed.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status for the event.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status for the event.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-event
		description: {
			type: require('./codeableconcept.input'),
			description: 'Additional information about the event that occurred - e.g. if the status remained unchanged.'
		},
		dateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date/time at which the event occurred.'
		},
		_dateTime: {
			type: require('./element.input'),
			description: 'The date/time at which the event occurred.'
		},
		actor: {
			type: require('./reference.input'),
			description: 'The person responsible for performing or recording the action.'
		}
	})
});
