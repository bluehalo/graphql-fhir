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
 * @summary SupplyRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SupplyRequest',
	description: 'Base StructureDefinition for SupplyRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'SupplyRequest_Enum_schema',
					values: { SupplyRequest: { value: 'SupplyRequest' } },
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
			description: 'Unique identifier for this supply request.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'Status of the supply request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-status
		status: {
			type: CodeScalar,
			description: 'Status of the supply request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-kind
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.',
		},
		_priority: {
			type: require('./element.schema.js'),
			description:
				'Indicates how quickly this SupplyRequest should be addressed with respect to other requests.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly this SupplyRequest should be addressed with respect to other requests.',
		},
		orderedItem: {
			type: require('./supplyrequestordereditem.schema.js'),
			description: 'The item being requested.',
		},
		_occurrenceDateTime: {
			type: require('./element.schema.js'),
			description: 'When the request should be fulfilled.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'When the request should be fulfilled.',
		},
		occurrencePeriod: {
			type: require('./period.schema.js'),
			description: 'When the request should be fulfilled.',
		},
		occurrenceTiming: {
			type: require('./timing.schema.js'),
			description: 'When the request should be fulfilled.',
		},
		_authoredOn: {
			type: require('./element.schema.js'),
			description: 'When the request was made.',
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'When the request was made.',
		},
		requester: {
			type: require('./supplyrequestrequester.schema.js'),
			description:
				'The individual who initiated the request and has responsibility for its activation.',
		},
		supplier: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'SupplyRequestsupplier_supplier_Union',
					description: 'Who is intended to fulfill the request.',
					types: () => [require('./organization.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description: 'Who is intended to fulfill the request.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-reason
		reasonCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description: 'Why the supply item was requested.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supplyrequest-reason
		reasonReference: {
			type: new GraphQLUnionType({
				name: 'SupplyRequestreasonReference_reasonReference_Union',
				description: 'Why the supply item was requested.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description: 'Why the supply item was requested.',
		},
		deliverFrom: {
			type: new GraphQLUnionType({
				name: 'SupplyRequestdeliverFrom_deliverFrom_Union',
				description: 'Where the supply is expected to come from.',
				types: () => [
					require('./organization.schema.js'),
					require('./location.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'Where the supply is expected to come from.',
		},
		deliverTo: {
			type: new GraphQLUnionType({
				name: 'SupplyRequestdeliverTo_deliverTo_Union',
				description: 'Where the supply is destined to go.',
				types: () => [
					require('./organization.schema.js'),
					require('./location.schema.js'),
					require('./patient.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description: 'Where the supply is destined to go.',
		},
	}),
});
