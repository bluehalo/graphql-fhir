const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MeasureReportgroup Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureReportgroup',
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
		identifier: {
			type: new GraphQLNonNull(require('./identifier.schema.js')),
			description:
				'The identifier of the population group as defined in the measure definition.',
		},
		population: {
			type: new GraphQLList(
				require('./measurereportgrouppopulation.schema.js'),
			),
			description:
				'The populations that make up the population group, one for each type of population appropriate for the measure.',
		},
		_measureScore: {
			type: require('./element.schema.js'),
			description:
				'The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.',
		},
		measureScore: {
			type: GraphQLFloat,
			description:
				'The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.',
		},
		stratifier: {
			type: new GraphQLList(
				require('./measurereportgroupstratifier.schema.js'),
			),
			description:
				'When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.',
		},
	}),
});
