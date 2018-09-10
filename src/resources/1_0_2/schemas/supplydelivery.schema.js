const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let SupplyDeliveryResourceType = new GraphQLEnumType({
	name: 'SupplyDeliveryResourceType',
	values: {
		SupplyDelivery: { value: 'SupplyDelivery' }
	}
});

/**
 * @name exports
 * @summary SupplyDelivery Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SupplyDelivery',
	description: 'Base StructureDefinition for SupplyDelivery Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(SupplyDeliveryResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'Identifier assigned by the dispensing facility when the item(s) is dispensed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplydelivery-status
		status: {
			type: CodeScalar,
			description: 'A code specifying the state of the dispense event.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'A code specifying the state of the dispense event.'
		},
		patient: {
			type: require('./reference.schema'),
			description: 'A link to a resource representing the person whom the delivered item is for.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplydelivery-type
		type: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'The amount of supply that has been dispensed. Includes unit of measure.'
		},
		suppliedItem: {
			type: require('./reference.schema'),
			description: 'Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a simple attribute carrying a code that identifies the item from a known list.'
		},
		supplier: {
			type: require('./reference.schema'),
			description: 'The individual responsible for dispensing the medication, supplier or device.'
		},
		whenPrepared: {
			type: require('./period.schema'),
			description: 'The time the dispense event occurred.'
		},
		time: {
			type: DateTimeScalar,
			description: 'The time the dispensed item was sent or handed to the patient (or agent).'
		},
		_time: {
			type: require('./element.schema'),
			description: 'The time the dispensed item was sent or handed to the patient (or agent).'
		},
		destination: {
			type: require('./reference.schema'),
			description: 'Identification of the facility/location where the Supply was shipped to, as part of the dispense event.'
		},
		receiver: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies the person who picked up the Supply.'
		}
	})
});
