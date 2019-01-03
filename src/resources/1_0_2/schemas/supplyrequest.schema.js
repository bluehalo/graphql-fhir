const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

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
		patient: {
			type: require('./reference.schema'),
			description: 'A link to a resource representing the person whom the ordered item is for.'
		},
		source: {
			type: require('./reference.schema'),
			description: 'The Practitioner , Organization or Patient who initiated this order for the supply.'
		},
		date: {
			type: DateTimeScalar,
			description: 'When the request was made.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'When the request was made.'
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
		kind: {
			type: require('./codeableconcept.schema'),
			description: 'Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.'
		},
		orderedItem: {
			type: require('./reference.schema'),
			description: 'The item that is requested to be supplied.'
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
		when: {
			type: require('./supplyrequestwhen.schema'),
			description: 'When the request should be fulfilled.'
		}
	})
});
