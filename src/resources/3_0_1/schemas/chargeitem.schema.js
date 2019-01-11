const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLFloat,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ChargeItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ChargeItem',
	description: 'Base StructureDefinition for ChargeItem Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ChargeItem_Enum_schema',
					values: { ChargeItem: { value: 'ChargeItem' } },
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
				'Identifiers assigned to this event performer or other systems.',
		},
		_definition: {
			type: require('./element.schema.js'),
			description:
				'References the source of pricing information, rules of application for the code this ChargeItem uses.',
		},
		definition: {
			type: new GraphQLList(UriScalar),
			description:
				'References the source of pricing information, rules of application for the code this ChargeItem uses.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The current state of the ChargeItem.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/chargeitem-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the ChargeItem.',
		},
		partOf: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ChargeItempartOf_partOf_Union',
					description:
						'ChargeItems can be grouped to larger ChargeItems covering the whole set.',
					types: () => [require('./chargeitem.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ChargeItem') {
							return require('./chargeitem.schema.js');
						}
					},
				}),
			),
			description:
				'ChargeItems can be grouped to larger ChargeItems covering the whole set.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/chargeitem-billingcodes
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'A code that identifies the charge, like a billing code.',
		},
		subject: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ChargeItemsubject_subject_Union',
					description:
						'The individual or set of individuals the action is being or was performed on.',
					types: () => [
						require('./patient.schema.js'),
						require('./group.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
					},
				}),
			),
			description:
				'The individual or set of individuals the action is being or was performed on.',
		},
		context: {
			type: new GraphQLUnionType({
				name: 'ChargeItemcontext_context_Union',
				description:
					'The encounter or episode of care that establishes the context for this event.',
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
				'The encounter or episode of care that establishes the context for this event.',
		},
		_occurrenceDateTime: {
			type: require('./element.schema.js'),
			description:
				'Date/time(s) or duration when the charged service was applied.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description:
				'Date/time(s) or duration when the charged service was applied.',
		},
		occurrencePeriod: {
			type: require('./period.schema.js'),
			description:
				'Date/time(s) or duration when the charged service was applied.',
		},
		occurrenceTiming: {
			type: require('./timing.schema.js'),
			description:
				'Date/time(s) or duration when the charged service was applied.',
		},
		participant: {
			type: new GraphQLList(require('./chargeitemparticipant.schema.js')),
			description:
				'Indicates who or what performed or participated in the charged service.',
		},
		performingOrganization: {
			type: new GraphQLUnionType({
				name: 'ChargeItemperformingOrganization_performingOrganization_Union',
				description: 'The organization requesting the service.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The organization requesting the service.',
		},
		requestingOrganization: {
			type: new GraphQLUnionType({
				name: 'ChargeItemrequestingOrganization_requestingOrganization_Union',
				description: 'The organization performing the service.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The organization performing the service.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description: 'Quantity of which the charge item has been serviced.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodysite: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The anatomical location where the related service has been applied.',
		},
		_factorOverride: {
			type: require('./element.schema.js'),
			description:
				'Factor overriding the factor determined by the rules associated with the code.',
		},
		factorOverride: {
			type: GraphQLFloat,
			description:
				'Factor overriding the factor determined by the rules associated with the code.',
		},
		priceOverride: {
			type: require('./money.schema.js'),
			description:
				'Total price of the charge overriding the list price associated with the code.',
		},
		_overrideReason: {
			type: require('./element.schema.js'),
			description:
				'If the list price or the rule based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.',
		},
		overrideReason: {
			type: GraphQLString,
			description:
				'If the list price or the rule based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.',
		},
		enterer: {
			type: new GraphQLUnionType({
				name: 'ChargeItementerer_enterer_Union',
				description:
					'The device, practitioner, etc. who entered the charge item.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./device.schema.js'),
					require('./relatedperson.schema.js'),
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
				},
			}),
			description:
				'The device, practitioner, etc. who entered the charge item.',
		},
		_enteredDate: {
			type: require('./element.schema.js'),
			description: 'Date the charge item was entered.',
		},
		enteredDate: {
			type: DateTimeScalar,
			description: 'Date the charge item was entered.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/icd-10
		reason: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Describes why the event occurred in coded or textual form.',
		},
		service: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ChargeItemservice_service_Union',
					description:
						'Indicated the rendered service that caused this charge.',
					types: () => [
						require('./diagnosticreport.schema.js'),
						require('./imagingstudy.schema.js'),
						require('./immunization.schema.js'),
						require('./medicationadministration.schema.js'),
						require('./medicationdispense.schema.js'),
						require('./observation.schema.js'),
						require('./procedure.schema.js'),
						require('./supplydelivery.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'DiagnosticReport') {
							return require('./diagnosticreport.schema.js');
						}
						if (data && data.resourceType === 'ImagingStudy') {
							return require('./imagingstudy.schema.js');
						}
						if (data && data.resourceType === 'Immunization') {
							return require('./immunization.schema.js');
						}
						if (data && data.resourceType === 'MedicationAdministration') {
							return require('./medicationadministration.schema.js');
						}
						if (data && data.resourceType === 'MedicationDispense') {
							return require('./medicationdispense.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'Procedure') {
							return require('./procedure.schema.js');
						}
						if (data && data.resourceType === 'SupplyDelivery') {
							return require('./supplydelivery.schema.js');
						}
					},
				}),
			),
			description: 'Indicated the rendered service that caused this charge.',
		},
		account: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ChargeItemaccount_account_Union',
					description: 'Account into which this ChargeItems belongs.',
					types: () => [require('./account.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Account') {
							return require('./account.schema.js');
						}
					},
				}),
			),
			description: 'Account into which this ChargeItems belongs.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Comments made about the event by the performer, subject or other participants.',
		},
		supportingInformation: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ChargeItemsupportingInformation_supportingInformation_Union',
					description: 'Further information supporting the this charge.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description: 'Further information supporting the this charge.',
		},
	}),
});
