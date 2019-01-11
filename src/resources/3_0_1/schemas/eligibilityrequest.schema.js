const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary EligibilityRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EligibilityRequest',
	description: 'Base StructureDefinition for EligibilityRequest Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'EligibilityRequest_Enum_schema',
					values: { EligibilityRequest: { value: 'EligibilityRequest' } },
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
			description: 'The Response business identifier.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the resource instance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/process-priority
		priority: {
			type: require('./codeableconcept.schema.js'),
			description: 'Immediate (STAT), best effort (NORMAL), deferred (DEFER).',
		},
		patient: {
			type: new GraphQLUnionType({
				name: 'EligibilityRequestpatient_patient_Union',
				description: 'Patient Resource.',
				types: () => [require('./patient.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description: 'Patient Resource.',
		},
		_servicedDate: {
			type: require('./element.schema.js'),
			description:
				'The date or dates when the enclosed suite of services were performed or completed.',
		},
		servicedDate: {
			type: DateScalar,
			description:
				'The date or dates when the enclosed suite of services were performed or completed.',
		},
		servicedPeriod: {
			type: require('./period.schema.js'),
			description:
				'The date or dates when the enclosed suite of services were performed or completed.',
		},
		_created: {
			type: require('./element.schema.js'),
			description: 'The date when this resource was created.',
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when this resource was created.',
		},
		enterer: {
			type: new GraphQLUnionType({
				name: 'EligibilityRequestenterer_enterer_Union',
				description:
					'Person who created the invoice/claim/pre-determination or pre-authorization.',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
				},
			}),
			description:
				'Person who created the invoice/claim/pre-determination or pre-authorization.',
		},
		provider: {
			type: new GraphQLUnionType({
				name: 'EligibilityRequestprovider_provider_Union',
				description:
					'The practitioner who is responsible for the services rendered to the patient.',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
				},
			}),
			description:
				'The practitioner who is responsible for the services rendered to the patient.',
		},
		organization: {
			type: new GraphQLUnionType({
				name: 'EligibilityRequestorganization_organization_Union',
				description:
					'The organization which is responsible for the services rendered to the patient.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The organization which is responsible for the services rendered to the patient.',
		},
		insurer: {
			type: new GraphQLUnionType({
				name: 'EligibilityRequestinsurer_insurer_Union',
				description: 'The Insurer who is target  of the request.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The Insurer who is target  of the request.',
		},
		facility: {
			type: new GraphQLUnionType({
				name: 'EligibilityRequestfacility_facility_Union',
				description: 'Facility where the services were provided.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'Facility where the services were provided.',
		},
		coverage: {
			type: new GraphQLUnionType({
				name: 'EligibilityRequestcoverage_coverage_Union',
				description:
					'Financial instrument by which payment information for health care.',
				types: () => [require('./coverage.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Coverage') {
						return require('./coverage.schema.js');
					}
				},
			}),
			description:
				'Financial instrument by which payment information for health care.',
		},
		_businessArrangement: {
			type: require('./element.schema.js'),
			description:
				'The contract number of a business agreement which describes the terms and conditions.',
		},
		businessArrangement: {
			type: GraphQLString,
			description:
				'The contract number of a business agreement which describes the terms and conditions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-category
		benefitCategory: {
			type: require('./codeableconcept.schema.js'),
			description: 'Dental, Vision, Medical, Pharmacy, Rehab etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		benefitSubCategory: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.',
		},
	}),
});
