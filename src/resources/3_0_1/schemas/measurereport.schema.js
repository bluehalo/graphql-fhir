const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary MeasureReport Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureReport',
	description: 'Base StructureDefinition for MeasureReport Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'A formal identifier that is used to identify this report when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/measure-report-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The report status. No data will be available until the report status is complete.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The report status. No data will be available until the report status is complete.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/measure-report-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of measure report. This may be an individual report, which provides a single patient\'s score for the measure; a patient listing, which returns the list of patients that meet the various criteria in the measure; or a summary report, which returns a population count for each of the criteria in the measure.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of measure report. This may be an individual report, which provides a single patient\'s score for the measure; a patient listing, which returns the list of patients that meet the various criteria in the measure; or a summary report, which returns a population count for each of the criteria in the measure.'
		},
		measure: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A reference to the Measure that was evaluated to produce this report.'
		},
		patient: {
			type: require('./reference.schema'),
			description: 'Optional Patient if the report was requested for a single patient.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date this measure report was generated.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date this measure report was generated.'
		},
		reportingOrganization: {
			type: require('./reference.schema'),
			description: 'Reporting Organization.'
		},
		period: {
			type: new GraphQLNonNull(require('./period.schema')),
			description: 'The reporting period for which the report was calculated.'
		},
		group: {
			type: new GraphQLList(require('./measurereportgroup.schema')),
			description: 'The results of the calculation, one for each population group in the measure.'
		},
		evaluatedResources: {
			type: require('./reference.schema'),
			description: 'A reference to a Bundle containing the Resources that were used in the evaluation of this report.'
		}
	})
});
