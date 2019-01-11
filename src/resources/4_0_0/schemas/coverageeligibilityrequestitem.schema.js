const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary CoverageEligibilityRequestitem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CoverageEligibilityRequestitem',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_supportingInfoSequence: {
			type: require('./element.schema.js'),
			description:
				'Exceptions, special conditions and supporting information applicable for this service or product line.',
		},
		supportingInfoSequence: {
			type: new GraphQLList(PositiveIntScalar),
			description:
				'Exceptions, special conditions and supporting information applicable for this service or product line.',
		},
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Code to identify the general type of benefits under which products and services are provided.',
		},
		productOrService: {
			type: require('./codeableconcept.schema.js'),
			description:
				'This contains the product, service, drug or other billing code for the item.',
		},
		modifier: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Item typification or modifiers codes to convey additional context for the product or service.',
		},
		provider: {
			type: new GraphQLUnionType({
				name: 'CoverageEligibilityRequestitemprovider_provider_Union',
				description:
					'The practitioner who is responsible for the product or service to be rendered to the patient.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description:
				'The practitioner who is responsible for the product or service to be rendered to the patient.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description: 'The number of repetitions of a service or product.',
		},
		unitPrice: {
			type: require('./money.schema.js'),
			description:
				'The amount charged to the patient by the provider for a single unit.',
		},
		facility: {
			type: new GraphQLUnionType({
				name: 'CoverageEligibilityRequestitemfacility_facility_Union',
				description: 'Facility where the services will be provided.',
				types: () => [
					require('./location.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'Facility where the services will be provided.',
		},
		diagnosis: {
			type: new GraphQLList(
				require('./coverageeligibilityrequestitemdiagnosis.schema.js'),
			),
			description: 'Patient diagnosis for which care is sought.',
		},
		detail: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CoverageEligibilityRequestitemdetail_detail_Union',
					description:
						'The plan/proposal/order describing the proposed service in detail.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'The plan/proposal/order describing the proposed service in detail.',
		},
	}),
});
