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
	description:
		'A record of a request for a medication, substance or device used in the healthcare setting.',
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Business identifiers assigned to this SupplyRequest by the author and/or other systems. These identifiers remain constant as the resource is updated and propagates from server to server.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'Status of the supply request.',
		},
		status: {
			type: CodeScalar,
			description: 'Status of the supply request.',
		},
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
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly this SupplyRequest should be addressed with respect to other requests.',
		},
		itemCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.',
		},
		itemReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'SupplyRequestitemReference_itemReference_Union',
					description:
						'The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.',
					types: () => [
						require('./medication.schema.js'),
						require('./substance.schema.js'),
						require('./device.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Medication') {
							return require('./medication.schema.js');
						}
						if (data && data.resourceType === 'Substance') {
							return require('./substance.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
					},
				}),
			),
			description:
				'The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.',
		},
		quantity: {
			type: new GraphQLNonNull(require('./quantity.schema.js')),
			description: 'The amount that is being ordered of the indicated item.',
		},
		parameter: {
			type: new GraphQLList(require('./supplyrequestparameter.schema.js')),
			description:
				'Specific parameters for the ordered item.  For example, the size of the indicated item.',
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
			type: new GraphQLUnionType({
				name: 'SupplyRequestrequester_requester_Union',
				description:
					'The device, practitioner, etc. who initiated the request.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
					require('./device.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description: 'The device, practitioner, etc. who initiated the request.',
		},
		supplier: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'SupplyRequestsupplier_supplier_Union',
					description: 'Who is intended to fulfill the request.',
					types: () => [
						require('./organization.schema.js'),
						require('./healthcareservice.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
						if (data && data.resourceType === 'HealthcareService') {
							return require('./healthcareservice.schema.js');
						}
					},
				}),
			),
			description: 'Who is intended to fulfill the request.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'The reason why the supply item was requested.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'SupplyRequestreasonReference_reasonReference_Union',
					description: 'The reason why the supply item was requested.',
					types: () => [
						require('./condition.schema.js'),
						require('./observation.schema.js'),
						require('./diagnosticreport.schema.js'),
						require('./documentreference.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'DiagnosticReport') {
							return require('./diagnosticreport.schema.js');
						}
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
					},
				}),
			),
			description: 'The reason why the supply item was requested.',
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
