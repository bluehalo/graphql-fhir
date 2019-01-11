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
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary DeviceRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceRequest',
	description:
		'Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DeviceRequest_Enum_schema',
					values: { DeviceRequest: { value: 'DeviceRequest' } },
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
				'Identifiers assigned to this order by the orderer or by the receiver.',
		},
		_instantiatesCanonical: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this DeviceRequest.',
		},
		instantiatesCanonical: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this DeviceRequest.',
		},
		_instantiatesUri: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this DeviceRequest.',
		},
		instantiatesUri: {
			type: new GraphQLList(UriScalar),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this DeviceRequest.',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'DeviceRequestbasedOn_basedOn_Union',
					description: 'Plan/proposal/order fulfilled by this request.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description: 'Plan/proposal/order fulfilled by this request.',
		},
		priorRequest: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'DeviceRequestpriorRequest_priorRequest_Union',
					description:
						'The request takes the place of the referenced completed or terminated request(s).',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'The request takes the place of the referenced completed or terminated request(s).',
		},
		groupIdentifier: {
			type: require('./identifier.schema.js'),
			description: 'Composite request this is part of.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the request.',
		},
		status: {
			type: CodeScalar,
			description: 'The status of the request.',
		},
		_intent: {
			type: require('./element.schema.js'),
			description:
				'Whether the request is a proposal, plan, an original order or a reflex order.',
		},
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Whether the request is a proposal, plan, an original order or a reflex order.',
		},
		_priority: {
			type: require('./element.schema.js'),
			description:
				'Indicates how quickly the {{title}} should be addressed with respect to other requests.',
		},
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly the {{title}} should be addressed with respect to other requests.',
		},
		codeReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'DeviceRequestcodeReference_codeReference_Union',
					description: 'The details of the device to be used.',
					types: () => [require('./device.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
					},
				}),
			),
			description: 'The details of the device to be used.',
		},
		codeCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'The details of the device to be used.',
		},
		parameter: {
			type: new GraphQLList(require('./devicerequestparameter.schema.js')),
			description:
				'Specific parameters for the ordered item.  For example, the prism value for lenses.',
		},
		subject: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'DeviceRequestsubject_subject_Union',
					description: 'The patient who will use the device.',
					types: () => [
						require('./patient.schema.js'),
						require('./group.schema.js'),
						require('./location.schema.js'),
						require('./device.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
					},
				}),
			),
			description: 'The patient who will use the device.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'DeviceRequestencounter_encounter_Union',
				description:
					'An encounter that provides additional context in which this request is made.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'An encounter that provides additional context in which this request is made.',
		},
		_occurrenceDateTime: {
			type: require('./element.schema.js'),
			description:
				"The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description:
				"The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		occurrencePeriod: {
			type: require('./period.schema.js'),
			description:
				"The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		occurrenceTiming: {
			type: require('./timing.schema.js'),
			description:
				"The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. 'Every 8 hours'; 'Three times a day'; '1/2 an hour before breakfast for 10 days from 23-Dec 2011:'; '15 Oct 2013, 17 Oct 2013 and 1 Nov 2013'.",
		},
		_authoredOn: {
			type: require('./element.schema.js'),
			description: 'When the request transitioned to being actionable.',
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'When the request transitioned to being actionable.',
		},
		requester: {
			type: new GraphQLUnionType({
				name: 'DeviceRequestrequester_requester_Union',
				description:
					'The individual who initiated the request and has responsibility for its activation.',
				types: () => [
					require('./device.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The individual who initiated the request and has responsibility for its activation.',
		},
		performerType: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Desired type of performer for doing the diagnostic testing.',
		},
		performer: {
			type: new GraphQLUnionType({
				name: 'DeviceRequestperformer_performer_Union',
				description: 'The desired performer for doing the diagnostic testing.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
					require('./careteam.schema.js'),
					require('./healthcareservice.schema.js'),
					require('./patient.schema.js'),
					require('./device.schema.js'),
					require('./relatedperson.schema.js'),
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
					if (data && data.resourceType === 'CareTeam') {
						return require('./careteam.schema.js');
					}
					if (data && data.resourceType === 'HealthcareService') {
						return require('./healthcareservice.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description: 'The desired performer for doing the diagnostic testing.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Reason or justification for the use of this device.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'DeviceRequestreasonReference_reasonReference_Union',
					description: 'Reason or justification for the use of this device.',
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
			description: 'Reason or justification for the use of this device.',
		},
		insurance: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'DeviceRequestinsurance_insurance_Union',
					description:
						'Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.',
					types: () => [
						require('./coverage.schema.js'),
						require('./claimresponse.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Coverage') {
							return require('./coverage.schema.js');
						}
						if (data && data.resourceType === 'ClaimResponse') {
							return require('./claimresponse.schema.js');
						}
					},
				}),
			),
			description:
				'Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.',
		},
		supportingInfo: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'DeviceRequestsupportingInfo_supportingInfo_Union',
					description:
						"Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).",
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				"Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).",
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.',
		},
		relevantHistory: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'DeviceRequestrelevantHistory_relevantHistory_Union',
					description: 'Key events in the history of the request.',
					types: () => [require('./provenance.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Provenance') {
							return require('./provenance.schema.js');
						}
					},
				}),
			),
			description: 'Key events in the history of the request.',
		},
	}),
});
