const {
	GraphQLString,
	GraphQLList,
	GraphQLFloat,
	GraphQLInt,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary RiskEvidenceSynthesisriskEstimate Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RiskEvidenceSynthesisriskEstimate',
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
		_description: {
			type: require('./element.schema.js'),
			description: 'Human-readable summary of risk estimate.',
		},
		description: {
			type: GraphQLString,
			description: 'Human-readable summary of risk estimate.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'Examples include proportion and mean.',
		},
		_value: {
			type: require('./element.schema.js'),
			description: 'The point estimate of the risk estimate.',
		},
		value: {
			type: GraphQLFloat,
			description: 'The point estimate of the risk estimate.',
		},
		unitOfMeasure: {
			type: require('./codeableconcept.schema.js'),
			description: 'Specifies the UCUM unit for the outcome.',
		},
		_denominatorCount: {
			type: require('./element.schema.js'),
			description:
				'The sample size for the group that was measured for this risk estimate.',
		},
		denominatorCount: {
			type: GraphQLInt,
			description:
				'The sample size for the group that was measured for this risk estimate.',
		},
		_numeratorCount: {
			type: require('./element.schema.js'),
			description: 'The number of group members with the outcome of interest.',
		},
		numeratorCount: {
			type: GraphQLInt,
			description: 'The number of group members with the outcome of interest.',
		},
		precisionEstimate: {
			type: new GraphQLList(
				require('./riskevidencesynthesisriskestimateprecisionestimate.schema.js'),
			),
			description:
				'A description of the precision of the estimate for the effect.',
		},
	}),
});
