const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let SupplyRequestResourceType = new GraphQLEnumType({
	name: 'SupplyRequestResourceType',
	values: {
		SupplyRequest: { value: 'SupplyRequest' }
	}
});

/**
 * @name exports
 * @summary SupplyRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SupplyRequest',
	description: 'Base StructureDefinition for SupplyRequest Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(SupplyRequestResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'Unique identifier for this supply request.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-status
		status: {
			type: CodeScalar,
			description: 'Status of the supply request.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Status of the supply request.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-kind
		category: {
			type: require('./codeableconcept.schema'),
			description: 'Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description: 'Indicates how quickly this SupplyRequest should be addressed with respect to other requests.'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'Indicates how quickly this SupplyRequest should be addressed with respect to other requests.'
		},
		orderedItem: {
			type: require('./supplyrequestordereditem.schema'),
			description: 'The item being requested.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'When the request should be fulfilled.'
		},
		_occurrenceDateTime: {
			type: require('./element.schema'),
			description: 'When the request should be fulfilled.'
		},
		occurrencePeriod: {
			type: require('./period.schema'),
			description: 'When the request should be fulfilled.'
		},
		occurrenceTiming: {
			type: require('./timing.schema'),
			description: 'When the request should be fulfilled.'
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'When the request was made.'
		},
		_authoredOn: {
			type: require('./element.schema'),
			description: 'When the request was made.'
		},
		requester: {
			type: require('./supplyrequestrequester.schema'),
			description: 'The individual who initiated the request and has responsibility for its activation.'
		},
		supplier: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Who is intended to fulfill the request.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-reason
		reasonCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Why the supply item was requested.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-reason
		reasonReference: {
			type: require('./reference.schema'),
			description: 'Why the supply item was requested.'
		},
		deliverFrom: {
			type: require('./reference.schema'),
			description: 'Where the supply is expected to come from.'
		},
		deliverTo: {
			type: require('./reference.schema'),
			description: 'Where the supply is destined to go.'
		}
	})
});
