const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let SupplyRequestResourceInputType = new GraphQLEnumType({
	name: 'SupplyRequestResourceInputType',
	values: {
		SupplyRequest: { value: 'SupplyRequest' }
	}
});

/**
 * @name exports
 * @summary SupplyRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SupplyRequest_Input',
	description: 'Base StructureDefinition for SupplyRequest Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(SupplyRequestResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Unique identifier for this supply request.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-status
		status: {
			type: CodeScalar,
			description: 'Status of the supply request.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Status of the supply request.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-kind
		category: {
			type: require('./codeableconcept.input'),
			description: 'Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description: 'Indicates how quickly this SupplyRequest should be addressed with respect to other requests.'
		},
		_priority: {
			type: require('./element.input'),
			description: 'Indicates how quickly this SupplyRequest should be addressed with respect to other requests.'
		},
		orderedItem: {
			type: require('./supplyrequestordereditem.input'),
			description: 'The item being requested.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'When the request should be fulfilled.'
		},
		_occurrenceDateTime: {
			type: require('./element.input'),
			description: 'When the request should be fulfilled.'
		},
		occurrencePeriod: {
			type: require('./period.input'),
			description: 'When the request should be fulfilled.'
		},
		occurrenceTiming: {
			type: require('./timing.input'),
			description: 'When the request should be fulfilled.'
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'When the request was made.'
		},
		_authoredOn: {
			type: require('./element.input'),
			description: 'When the request was made.'
		},
		requester: {
			type: require('./supplyrequestrequester.input'),
			description: 'The individual who initiated the request and has responsibility for its activation.'
		},
		supplier: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Who is intended to fulfill the request.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-reason
		reasonCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Why the supply item was requested.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-reason
		reasonReference: {
			type: require('./reference.input'),
			description: 'Why the supply item was requested.'
		},
		deliverFrom: {
			type: require('./reference.input'),
			description: 'Where the supply is expected to come from.'
		},
		deliverTo: {
			type: require('./reference.input'),
			description: 'Where the supply is destined to go.'
		}
	})
});
