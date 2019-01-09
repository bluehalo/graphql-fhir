const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MeasureReportgroupstratifierstratum Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureReportgroupstratifierstratum',
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
		_value: {
			type: require('./element.schema.js'),
			description:
				'The value for this stratum, expressed as a string. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.',
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The value for this stratum, expressed as a string. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.',
		},
		population: {
			type: new GraphQLList(
				require('./measurereportgroupstratifierstratumpopulation.schema.js'),
			),
			description:
				'The populations that make up the stratum, one for each type of population appropriate to the measure.',
		},
		_measureScore: {
			type: require('./element.schema.js'),
			description:
				'The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.',
		},
		measureScore: {
			type: GraphQLFloat,
			description:
				'The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.',
		},
	}),
});
