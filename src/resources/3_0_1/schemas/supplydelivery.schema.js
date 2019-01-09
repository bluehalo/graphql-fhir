const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary SupplyDelivery Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SupplyDelivery',
	description: 'Base StructureDefinition for SupplyDelivery Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'SupplyDelivery_Enum_schema',
					values: { SupplyDelivery: { value: 'SupplyDelivery' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'Identifier assigned by the dispensing facility when the item(s) is dispensed.',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'SupplyDeliverybasedOn_basedOn_Union',
					description:
						'A plan, proposal or order that is fulfilled in whole or in part by this event.',
					types: () => [require('./supplyrequest.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'SupplyRequest') {
							return require('./supplyrequest.schema.js');
						}
					},
				}),
			),
			description:
				'A plan, proposal or order that is fulfilled in whole or in part by this event.',
		},
		partOf: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'SupplyDeliverypartOf_partOf_Union',
					description:
						'A larger event of which this particular event is a component or step.',
					types: () => [
						require('./supplydelivery.schema.js'),
						require('./contract.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'SupplyDelivery') {
							return require('./supplydelivery.schema.js');
						}
						if (data && data.resourceType === 'Contract') {
							return require('./contract.schema.js');
						}
					},
				}),
			),
			description:
				'A larger event of which this particular event is a component or step.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'A code specifying the state of the dispense event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supplydelivery-status
		status: {
			type: CodeScalar,
			description: 'A code specifying the state of the dispense event.',
		},
		patient: {
			type: new GraphQLUnionType({
				name: 'SupplyDeliverypatient_patient_Union',
				description:
					'A link to a resource representing the person whom the delivered item is for.',
				types: () => [require('./patient.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description:
				'A link to a resource representing the person whom the delivered item is for.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supplydelivery-type
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.',
		},
		suppliedItem: {
			type: require('./supplydeliverysupplieditem.schema.js'),
			description: 'The item that is being delivered or has been supplied.',
		},
		_occurrenceDateTime: {
			type: require('./element.schema.js'),
			description: 'The date or time(s) the activity occurred.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The date or time(s) the activity occurred.',
		},
		occurrencePeriod: {
			type: require('./period.schema.js'),
			description: 'The date or time(s) the activity occurred.',
		},
		occurrenceTiming: {
			type: require('./timing.schema.js'),
			description: 'The date or time(s) the activity occurred.',
		},
		supplier: {
			type: new GraphQLUnionType({
				name: 'SupplyDeliverysupplier_supplier_Union',
				description:
					'The individual responsible for dispensing the medication, supplier or device.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The individual responsible for dispensing the medication, supplier or device.',
		},
		destination: {
			type: new GraphQLUnionType({
				name: 'SupplyDeliverydestination_destination_Union',
				description:
					'Identification of the facility/location where the Supply was shipped to, as part of the dispense event.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description:
				'Identification of the facility/location where the Supply was shipped to, as part of the dispense event.',
		},
		receiver: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'SupplyDeliveryreceiver_receiver_Union',
					description: 'Identifies the person who picked up the Supply.',
					types: () => [require('./practitioner.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
					},
				}),
			),
			description: 'Identifies the person who picked up the Supply.',
		},
	}),
});
