const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let SupplyDeliveryResourceInputType = new GraphQLEnumType({
	name: 'SupplyDeliveryResourceInputType',
	values: {
		SupplyDelivery: { value: 'SupplyDelivery' }
	}
});

/**
 * @name exports
 * @summary SupplyDelivery Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SupplyDelivery_Input',
	description: 'Base StructureDefinition for SupplyDelivery Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(SupplyDeliveryResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Identifier assigned by the dispensing facility when the item(s) is dispensed.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A plan, proposal or order that is fulfilled in whole or in part by this event.'
		},
		partOf: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A larger event of which this particular event is a component or step.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplydelivery-status
		status: {
			type: CodeScalar,
			description: 'A code specifying the state of the dispense event.'
		},
		_status: {
			type: require('./element.input'),
			description: 'A code specifying the state of the dispense event.'
		},
		patient: {
			type: require('./reference.input'),
			description: 'A link to a resource representing the person whom the delivered item is for.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplydelivery-type
		type: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.'
		},
		suppliedItem: {
			type: require('./supplydeliverysupplieditem.input'),
			description: 'The item that is being delivered or has been supplied.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The date or time(s) the activity occurred.'
		},
		_occurrenceDateTime: {
			type: require('./element.input'),
			description: 'The date or time(s) the activity occurred.'
		},
		occurrencePeriod: {
			type: require('./period.input'),
			description: 'The date or time(s) the activity occurred.'
		},
		occurrenceTiming: {
			type: require('./timing.input'),
			description: 'The date or time(s) the activity occurred.'
		},
		supplier: {
			type: require('./reference.input'),
			description: 'The individual responsible for dispensing the medication, supplier or device.'
		},
		destination: {
			type: require('./reference.input'),
			description: 'Identification of the facility/location where the Supply was shipped to, as part of the dispense event.'
		},
		receiver: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Identifies the person who picked up the Supply.'
		}
	})
});
