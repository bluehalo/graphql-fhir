const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary InsurancePlanplan Schema
 */
module.exports = new GraphQLObjectType({
	name: 'InsurancePlanplan',
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
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				"Type of plan. For example, 'Platinum' or 'High Deductable'.",
		},
		coverageArea: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'InsurancePlanplancoverageArea_coverageArea_Union',
					description:
						"The geographic region in which a health insurance plan's benefits apply.",
					types: () => [require('./location.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
					},
				}),
			),
			description:
				"The geographic region in which a health insurance plan's benefits apply.",
		},
		network: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'InsurancePlanplannetwork_network_Union',
					description:
						'Reference to the network that providing the type of coverage.',
					types: () => [require('./organization.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'Reference to the network that providing the type of coverage.',
		},
		generalCost: {
			type: new GraphQLList(
				require('./insuranceplanplangeneralcost.schema.js'),
			),
			description: 'Overall costs associated with the plan.',
		},
		specificCost: {
			type: new GraphQLList(
				require('./insuranceplanplanspecificcost.schema.js'),
			),
			description:
				'Costs associated with the coverage provided by the product.',
		},
	}),
});
