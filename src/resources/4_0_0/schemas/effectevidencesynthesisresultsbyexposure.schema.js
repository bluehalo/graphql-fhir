const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary EffectEvidenceSynthesisresultsByExposure Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EffectEvidenceSynthesisresultsByExposure',
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
			description: 'Human-readable summary of results by exposure state.',
		},
		description: {
			type: GraphQLString,
			description: 'Human-readable summary of results by exposure state.',
		},
		_exposureState: {
			type: require('./element.schema.js'),
			description:
				'Whether these results are for the exposure state or alternative exposure state.',
		},
		exposureState: {
			type: CodeScalar,
			description:
				'Whether these results are for the exposure state or alternative exposure state.',
		},
		variantState: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Used to define variant exposure states such as low-risk state.',
		},
		riskEvidenceSynthesis: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name:
						'EffectEvidenceSynthesisresultsByExposureriskEvidenceSynthesis_riskEvidenceSynthesis_Union',
					description: 'Reference to a RiskEvidenceSynthesis resource.',
					types: () => [require('./riskevidencesynthesis.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'RiskEvidenceSynthesis') {
							return require('./riskevidencesynthesis.schema.js');
						}
					},
				}),
			),
			description: 'Reference to a RiskEvidenceSynthesis resource.',
		},
	}),
});
