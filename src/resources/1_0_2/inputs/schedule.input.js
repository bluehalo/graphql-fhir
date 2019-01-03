const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ScheduleResourceInputType = new GraphQLEnumType({
	name: 'ScheduleResourceInputType',
	values: {
		Schedule: { value: 'Schedule' },
	},
});

/**
 * @name exports
 * @summary Schedule Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Schedule_Input',
	description: 'Base StructureDefinition for Schedule Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(ScheduleResourceInputType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.input')),
				description: 'External Ids for this item.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
			type: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'The schedule type can be used for the categorization of healthcare services or other appointment types.',
			},
			actor: {
				type: new GraphQLNonNull(require('./reference.input')),
				description:
					'The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, Device, Patient or RelatedPerson.',
			},
			planningHorizon: {
				type: require('./period.input'),
				description:
					"The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a 'template' for planning outside these dates.",
			},
			comment: {
				type: GraphQLString,
				description:
					'Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated.',
			},
			_comment: {
				type: require('./element.input'),
				description:
					'Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated.',
			},
		}),
});
