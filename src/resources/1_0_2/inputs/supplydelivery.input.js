const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

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
		quantity: {
			type: require('./quantity.input'),
			description: 'The amount of supply that has been dispensed. Includes unit of measure.'
		},
		suppliedItem: {
			type: require('./reference.input'),
			description: 'Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a simple attribute carrying a code that identifies the item from a known list.'
		},
		supplier: {
			type: require('./reference.input'),
			description: 'The individual responsible for dispensing the medication, supplier or device.'
		},
		whenPrepared: {
			type: require('./period.input'),
			description: 'The time the dispense event occurred.'
		},
		time: {
			type: DateTimeScalar,
			description: 'The time the dispensed item was sent or handed to the patient (or agent).'
		},
		_time: {
			type: require('./element.input'),
			description: 'The time the dispensed item was sent or handed to the patient (or agent).'
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
