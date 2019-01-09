const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary EligibilityResponseinsurance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EligibilityResponseinsurance',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		coverage: {
			type: new GraphQLUnionType({
				name: 'EligibilityResponseinsurancecoverage_coverage_Union',
				description:
					'A suite of updated or additional Coverages from the Insurer.',
				types: () => [require('./coverage.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Coverage') {
						return require('./coverage.schema.js');
					}
				},
			}),
			description:
				'A suite of updated or additional Coverages from the Insurer.',
		},
		contract: {
			type: new GraphQLUnionType({
				name: 'EligibilityResponseinsurancecontract_contract_Union',
				description:
					'The contract resource which may provide more detailed information.',
				types: () => [require('./contract.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Contract') {
						return require('./contract.schema.js');
					}
				},
			}),
			description:
				'The contract resource which may provide more detailed information.',
		},
		benefitBalance: {
			type: new GraphQLList(
				require('./eligibilityresponseinsurancebenefitbalance.schema.js'),
			),
			description: 'Benefits and optionally current balances by Category.',
		},
	}),
});
