const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

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
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The meaning of the population group as defined in the measure definition.',
		},
		population: {
			type: new GraphQLList(
				require('./measurereportgrouppopulation.schema.js'),
			),
			description:
				'The populations that make up the population group, one for each type of population appropriate for the measure.',
		},
		measureScore: {
			type: require('./quantity.schema.js'),
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
