const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ProcedureRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcedureRequest',
	description: 'Base StructureDefinition for ProcedureRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ProcedureRequest_Enum_schema',
					values: { ProcedureRequest: { value: 'ProcedureRequest' } },
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
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller.',
		},
		definition: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ProcedureRequestdefinition_definition_Union',
					description: 'Protocol or definition followed by this request.',
					types: () => [
						require('./activitydefinition.schema.js'),
						require('./plandefinition.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'ActivityDefinition') {
							return require('./activitydefinition.schema.js');
						}
						if (data && data.resourceType === 'PlanDefinition') {
							return require('./plandefinition.schema.js');
						}
					},
				}),
			),
			description: 'Protocol or definition followed by this request.',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ProcedureRequestbasedOn_basedOn_Union',
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
		replaces: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ProcedureRequestreplaces_replaces_Union',
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
		requisition: {
			type: require('./identifier.schema.js'),
			description:
				'A shared identifier common to all procedure or diagnostic requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the order.',
		},
		_intent: {
			type: require('./element.schema.js'),
			description:
				'Whether the request is a proposal, plan, an original order or a reflex order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-intent
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Whether the request is a proposal, plan, an original order or a reflex order.',
		},
		_priority: {
			type: require('./element.schema.js'),
			description:
				'Indicates how quickly the ProcedureRequest should be addressed with respect to other requests.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly the ProcedureRequest should be addressed with respect to other requests.',
		},
		_doNotPerform: {
			type: require('./element.schema.js'),
			description:
				'Set this to true if the record is saying that the procedure should NOT be performed.',
		},
		doNotPerform: {
			type: GraphQLBoolean,
			description:
				'Set this to true if the record is saying that the procedure should NOT be performed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-category
		category: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				"A code that classifies the procedure for searching, sorting and display purposes (e.g. 'Surgical Procedure').",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'A code that identifies a particular procedure, diagnostic investigation, or panel of investigations, that have been requested.',
		},
		subject: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ProcedureRequestsubject_subject_Union',
					description:
						'On whom or what the procedure or diagnostic is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).',
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
				'On whom or what the procedure or diagnostic is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).',
		},
		context: {
			type: new GraphQLUnionType({
				name: 'ProcedureRequestcontext_context_Union',
				description:
					'An encounter or episode of care that provides additional information about the healthcare context in which this request is made.',
				types: () => [
					require('./encounter.schema.js'),
					require('./episodeofcare.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
					if (data && data.resourceType === 'EpisodeOfCare') {
						return require('./episodeofcare.schema.js');
					}
				},
			}),
			description:
				'An encounter or episode of care that provides additional information about the healthcare context in which this request is made.',
		},
		_occurrenceDateTime: {
			type: require('./element.schema.js'),
			description:
				'The date/time at which the diagnostic testing should occur.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description:
				'The date/time at which the diagnostic testing should occur.',
		},
		occurrencePeriod: {
			type: require('./period.schema.js'),
			description:
				'The date/time at which the diagnostic testing should occur.',
		},
		occurrenceTiming: {
			type: require('./timing.schema.js'),
			description:
				'The date/time at which the diagnostic testing should occur.',
		},
		_asNeededBoolean: {
			type: require('./element.schema.js'),
			description:
				"If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example 'pain', 'on flare-up', etc.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		asNeededBoolean: {
			type: GraphQLBoolean,
			description:
				"If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example 'pain', 'on flare-up', etc.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-as-needed-reason
		asNeededCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				"If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example 'pain', 'on flare-up', etc.",
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
			type: require('./procedurerequestrequester.schema.js'),
			description:
				'The individual who initiated the request and has responsibility for its activation.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		performerType: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Desired type of performer for doing the diagnostic testing.',
		},
		performer: {
			type: new GraphQLUnionType({
				name: 'ProcedureRequestperformer_performer_Union',
				description:
					'The desired perfomer for doing the diagnostic testing.  For example, the surgeon, dermatopathologist, endoscopist, etc.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./device.schema.js'),
					require('./relatedperson.schema.js'),
					require('./healthcareservice.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
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
					if (data && data.resourceType === 'HealthcareService') {
						return require('./healthcareservice.schema.js');
					}
				},
			}),
			description:
				'The desired perfomer for doing the diagnostic testing.  For example, the surgeon, dermatopathologist, endoscopist, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'An explanation or justification for why this diagnostic investigation is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ProcedureRequestreasonReference_reasonReference_Union',
					description:
						'Indicates another resource that provides a justification for why this diagnostic investigation is being requested.   May relate to the resources referred to in supportingInformation.',
					types: () => [
						require('./condition.schema.js'),
						require('./observation.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
					},
				}),
			),
			description:
				'Indicates another resource that provides a justification for why this diagnostic investigation is being requested.   May relate to the resources referred to in supportingInformation.',
		},
		supportingInfo: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ProcedureRequestsupportingInfo_supportingInfo_Union',
					description:
						"Additional clinical information about the patient or specimen that may influence the procedure or diagnostics or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as 'ask at order entry questions (AOEs)'.  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.",
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				"Additional clinical information about the patient or specimen that may influence the procedure or diagnostics or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as 'ask at order entry questions (AOEs)'.  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.",
		},
		specimen: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ProcedureRequestspecimen_specimen_Union',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Anatomic location where the procedure should be performed. This is the target site.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				"Any other notes and comments made about the service request. For example, letting provider know that 'patient hates needles' or other provider instructions.",
		},
		relevantHistory: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ProcedureRequestrelevantHistory_relevantHistory_Union',
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
