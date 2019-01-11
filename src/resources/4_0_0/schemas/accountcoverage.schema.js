const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary Accountcoverage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Accountcoverage',
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
					name: 'Accountcoveragecoverage_coverage_Union',
					description:
						'The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).  A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.',
					types: () => [require('./coverage.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Coverage') {
							return require('./coverage.schema.js');
						}
					},
				}),
			),
			description:
				'The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).  A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.',
		},
		_priority: {
			type: require('./element.schema.js'),
			description:
				'The priority of the coverage in the context of this account.',
		},
		priority: {
			type: PositiveIntScalar,
			description:
				'The priority of the coverage in the context of this account.',
		},
	}),
});
