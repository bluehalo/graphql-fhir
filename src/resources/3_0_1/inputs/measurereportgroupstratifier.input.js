const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MeasureReport.group.stratifier Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MeasureReportGroupStratifier_Input',
	description: 'When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: require('./identifier.input'),
			description: 'The identifier of this stratifier, as defined in the measure definition.'
		},
		stratum: {
			type: new GraphQLList(require('./measurereportgroupstratifierstratum.input')),
			description: 'This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.'
		}
	})
});
