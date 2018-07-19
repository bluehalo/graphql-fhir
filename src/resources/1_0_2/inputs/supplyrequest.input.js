const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary SupplyRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SupplyRequest_Input',
	description: 'Base StructureDefinition for SupplyRequest Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		patient: {
			type: require('./reference.input'),
			description: 'A link to a resource representing the person whom the ordered item is for.'
		},
		source: {
			type: require('./reference.input'),
			description: 'The Practitioner , Organization or Patient who initiated this order for the supply.'
		},
		date: {
			type: DateTimeScalar,
			description: 'When the request was made.'
		},
		_date: {
			type: require('./element.input'),
			description: 'When the request was made.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Unique identifier for this supply request.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-status
		status: {
			type: CodeScalar,
			description: 'Status of the supply request.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Status of the supply request.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-kind
		kind: {
			type: require('./codeableconcept.input'),
			description: 'Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.'
		},
		orderedItem: {
			type: require('./reference.input'),
			description: 'The item that is requested to be supplied.'
		},
		supplier: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Who is intended to fulfill the request.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-reason
		reasonCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Why the supply item was requested.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-reason
		reasonReference: {
			type: require('./reference.input'),
			description: 'Why the supply item was requested.'
		},
		when: {
			type: require('./supplyrequestwhen.input'),
			description: 'When the request should be fulfilled.'
		}
	})
});
