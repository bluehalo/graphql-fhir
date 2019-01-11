const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary MeasureReportgroupstratifier Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureReportgroupstratifier',
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
			type: require('./identifier.schema.js'),
			description:
				'The identifier of this stratifier, as defined in the measure definition.',
		},
		stratum: {
			type: new GraphQLList(
				require('./measurereportgroupstratifierstratum.schema.js'),
			),
			description:
				'This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.',
		},
	}),
});
