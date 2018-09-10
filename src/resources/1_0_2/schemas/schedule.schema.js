const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ScheduleResourceType = new GraphQLEnumType({
	name: 'ScheduleResourceType',
	values: {
		Schedule: { value: 'Schedule' }
	}
});

/**
 * @name exports
 * @summary Schedule Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Schedule',
	description: 'Base StructureDefinition for Schedule Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ScheduleResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'External Ids for this item.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-practice-codes
		type: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The schedule type can be used for the categorization of healthcare services or other appointment types.'
		},
		actor: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, Device, Patient or RelatedPerson.'
		},
		planningHorizon: {
			type: require('./period.schema'),
			description: 'The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization\'s planning horizon; the interval for which they are currently accepting appointments. This does not define a \'template\' for planning outside these dates.'
		},
		comment: {
			type: GraphQLString,
			description: 'Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated.'
		},
		_comment: {
			type: require('./element.schema'),
			description: 'Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated.'
		}
	})
});
