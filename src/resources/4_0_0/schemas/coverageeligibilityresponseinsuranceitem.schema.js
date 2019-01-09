const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary CoverageEligibilityResponseinsuranceitem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CoverageEligibilityResponseinsuranceitem',
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
				name: 'CoverageEligibilityResponseinsuranceitemprovider_provider_Union',
				description:
					'The practitioner who is eligible for the provision of the product or service.',
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
				'The practitioner who is eligible for the provision of the product or service.',
		},
		_excluded: {
			type: require('./element.schema.js'),
			description:
				'True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.',
		},
		excluded: {
			type: GraphQLBoolean,
			description:
				'True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'A short name or tag for the benefit.',
		},
		name: {
			type: GraphQLString,
			description: 'A short name or tag for the benefit.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'A richer description of the benefit or services covered.',
		},
		description: {
			type: GraphQLString,
			description: 'A richer description of the benefit or services covered.',
		},
		network: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.',
		},
		unit: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Indicates if the benefits apply to an individual or to the family.',
		},
		term: {
			type: require('./codeableconcept.schema.js'),
			description:
				"The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.",
		},
		benefit: {
			type: new GraphQLList(
				require('./coverageeligibilityresponseinsuranceitembenefit.schema.js'),
			),
			description: 'Benefits used to date.',
		},
		_authorizationRequired: {
			type: require('./element.schema.js'),
			description:
				'A boolean flag indicating whether a preauthorization is required prior to actual service delivery.',
		},
		authorizationRequired: {
			type: GraphQLBoolean,
			description:
				'A boolean flag indicating whether a preauthorization is required prior to actual service delivery.',
		},
		authorizationSupporting: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Codes or comments regarding information or actions associated with the preauthorization.',
		},
		_authorizationUrl: {
			type: require('./element.schema.js'),
			description:
				'A web location for obtaining requirements or descriptive information regarding the preauthorization.',
		},
		authorizationUrl: {
			type: UriScalar,
			description:
				'A web location for obtaining requirements or descriptive information regarding the preauthorization.',
		},
	}),
});
