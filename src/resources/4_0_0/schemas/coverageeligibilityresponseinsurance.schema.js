const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary CoverageEligibilityResponseinsurance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CoverageEligibilityResponseinsurance',
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
		coverage: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CoverageEligibilityResponseinsurancecoverage_coverage_Union',
					description:
						"Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.",
					types: () => [require('./coverage.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Coverage') {
							return require('./coverage.schema.js');
						}
					},
				}),
			),
			description:
				"Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.",
		},
		_inforce: {
			type: require('./element.schema.js'),
			description:
				'Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.',
		},
		inforce: {
			type: GraphQLBoolean,
			description:
				'Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.',
		},
		benefitPeriod: {
			type: require('./period.schema.js'),
			description: 'The term of the benefits documented in this response.',
		},
		item: {
			type: new GraphQLList(
				require('./coverageeligibilityresponseinsuranceitem.schema.js'),
			),
			description:
				'Benefits and optionally current balances, and authorization details by category or service.',
		},
	}),
});
