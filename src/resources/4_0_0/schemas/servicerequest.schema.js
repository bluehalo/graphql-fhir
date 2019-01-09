const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ServiceRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ServiceRequest',
	description:
		'A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ServiceRequest_Enum_schema',
					values: { ServiceRequest: { value: 'ServiceRequest' } },
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
				'Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller.',
		},
		_instantiatesCanonical: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.',
		},
		instantiatesCanonical: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.',
		},
		_instantiatesUri: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.',
		},
		instantiatesUri: {
			type: new GraphQLList(UriScalar),
			description:
				'The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest.',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ServiceRequestbasedOn_basedOn_Union',
					description: 'Plan/proposal/order fulfilled by this request.',
					types: () => [
						require('./careplan.schema.js'),
						require('./servicerequest.schema.js'),
						require('./medicationrequest.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'CarePlan') {
							return require('./careplan.schema.js');
						}
						if (data && data.resourceType === 'ServiceRequest') {
							return require('./servicerequest.schema.js');
						}
						if (data && data.resourceType === 'MedicationRequest') {
							return require('./medicationrequest.schema.js');
						}
					},
				}),
			),
			description: 'Plan/proposal/order fulfilled by this request.',
		},
		replaces: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ServiceRequestreplaces_replaces_Union',
					description:
						'The request takes the place of the referenced completed or terminated request(s).',
					types: () => [require('./servicerequest.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ServiceRequest') {
							return require('./servicerequest.schema.js');
						}
					},
				}),
			),
			description:
				'The request takes the place of the referenced completed or terminated request(s).',
		},
		requisition: {
			type: require('./identifier.schema.js'),
			description:
				'A shared identifier common to all service requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the order.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the order.',
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
		category: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				"A code that classifies the service for searching, sorting and display purposes (e.g. 'Surgical Procedure').",
		},
		_priority: {
			type: require('./element.schema.js'),
			description:
				'Indicates how quickly the ServiceRequest should be addressed with respect to other requests.',
		},
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly the ServiceRequest should be addressed with respect to other requests.',
		},
		_doNotPerform: {
			type: require('./element.schema.js'),
			description:
				'Set this to true if the record is saying that the service/procedure should NOT be performed.',
		},
		doNotPerform: {
			type: GraphQLBoolean,
			description:
				'Set this to true if the record is saying that the service/procedure should NOT be performed.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code that identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested.',
		},
		orderDetail: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Additional details and instructions about the how the services are to be delivered.   For example, and order for a urinary catheter may have an order detail for an external or indwelling catheter, or an order for a bandage may require additional instructions specifying how the bandage should be applied.',
		},
		quantityQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).',
		},
		quantityRatio: {
			type: require('./ratio.schema.js'),
			description:
				'An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).',
		},
		quantityRange: {
			type: require('./range.schema.js'),
			description:
				'An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction).',
		},
		subject: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ServiceRequestsubject_subject_Union',
					description:
						'On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).',
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
			description:
				'On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'ServiceRequestencounter_encounter_Union',
				description:
					'An encounter that provides additional information about the healthcare context in which this request is made.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'An encounter that provides additional information about the healthcare context in which this request is made.',
		},
		_occurrenceDateTime: {
			type: require('./element.schema.js'),
			description: 'The date/time at which the requested service should occur.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The date/time at which the requested service should occur.',
		},
		occurrencePeriod: {
			type: require('./period.schema.js'),
			description: 'The date/time at which the requested service should occur.',
		},
		occurrenceTiming: {
			type: require('./timing.schema.js'),
			description: 'The date/time at which the requested service should occur.',
		},
		_asNeededBoolean: {
			type: require('./element.schema.js'),
			description:
				"If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example 'pain', 'on flare-up', etc.",
		},
		asNeededBoolean: {
			type: GraphQLBoolean,
			description:
				"If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example 'pain', 'on flare-up', etc.",
		},
		asNeededCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				"If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example 'pain', 'on flare-up', etc.",
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
				name: 'ServiceRequestrequester_requester_Union',
				description:
					'The individual who initiated the request and has responsibility for its activation.',
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
			description:
				'The individual who initiated the request and has responsibility for its activation.',
		},
		performerType: {
			type: require('./codeableconcept.schema.js'),
			description: 'Desired type of performer for doing the requested service.',
		},
		performer: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ServiceRequestperformer_performer_Union',
					description:
						'The desired performer for doing the requested service.  For example, the surgeon, dermatopathologist, endoscopist, etc.',
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
			),
			description:
				'The desired performer for doing the requested service.  For example, the surgeon, dermatopathologist, endoscopist, etc.',
		},
		locationCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing day care center.',
		},
		locationReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ServiceRequestlocationReference_locationReference_Union',
					description:
						'A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center.',
					types: () => [require('./location.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
					},
				}),
			),
			description:
				'A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'An explanation or justification for why this service is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in `supportingInfo`.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ServiceRequestreasonReference_reasonReference_Union',
					description:
						'Indicates another resource that provides a justification for why this service is being requested.   May relate to the resources referred to in `supportingInfo`.',
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
			description:
				'Indicates another resource that provides a justification for why this service is being requested.   May relate to the resources referred to in `supportingInfo`.',
		},
		insurance: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ServiceRequestinsurance_insurance_Union',
					description:
						'Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service.',
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
				'Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service.',
		},
		supportingInfo: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ServiceRequestsupportingInfo_supportingInfo_Union',
					description:
						"Additional clinical information about the patient or specimen that may influence the services or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as 'ask at order entry questions (AOEs)'.  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.",
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				"Additional clinical information about the patient or specimen that may influence the services or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as 'ask at order entry questions (AOEs)'.  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.",
		},
		specimen: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ServiceRequestspecimen_specimen_Union',
					description:
						'One or more specimens that the laboratory procedure will use.',
					types: () => [require('./specimen.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Specimen') {
							return require('./specimen.schema.js');
						}
					},
				}),
			),
			description:
				'One or more specimens that the laboratory procedure will use.',
		},
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Anatomic location where the procedure should be performed. This is the target site.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Any other notes and comments made about the service request. For example, internal billing notes.',
		},
		_patientInstruction: {
			type: require('./element.schema.js'),
			description:
				'Instructions in terms that are understood by the patient or consumer.',
		},
		patientInstruction: {
			type: GraphQLString,
			description:
				'Instructions in terms that are understood by the patient or consumer.',
		},
		relevantHistory: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ServiceRequestrelevantHistory_relevantHistory_Union',
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
