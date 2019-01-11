const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ClaimResponseinsurance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseinsurance',
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
		_sequence: {
			type: require('./element.schema.js'),
			description:
				'A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				'A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order.',
		},
		_focal: {
			type: require('./element.schema.js'),
			description:
				'A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true.',
		},
		focal: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true.',
		},
		coverage: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ClaimResponseinsurancecoverage_coverage_Union',
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
		_businessArrangement: {
			type: require('./element.schema.js'),
			description:
				'A business agreement number established between the provider and the insurer for special business processing purposes.',
		},
		businessArrangement: {
			type: GraphQLString,
			description:
				'A business agreement number established between the provider and the insurer for special business processing purposes.',
		},
		claimResponse: {
			type: new GraphQLUnionType({
				name: 'ClaimResponseinsuranceclaimResponse_claimResponse_Union',
				description:
					'The result of the adjudication of the line items for the Coverage specified in this insurance.',
				types: () => [require('./claimresponse.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'ClaimResponse') {
						return require('./claimresponse.schema.js');
					}
				},
			}),
			description:
				'The result of the adjudication of the line items for the Coverage specified in this insurance.',
		},
	}),
});
