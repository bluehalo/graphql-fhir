const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let DeviceUseStatementResourceType = new GraphQLEnumType({
	name: 'DeviceUseStatementResourceType',
	values: {
		DeviceUseStatement: { value: 'DeviceUseStatement' }
	}
});

/**
 * @name exports
 * @summary DeviceUseStatement Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceUseStatement',
	description: 'Base StructureDefinition for DeviceUseStatement Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DeviceUseStatementResourceType),
			description: 'Type of this resource.'
		},
		bodySiteCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates the site on the subject\'s body where the device was used ( i.e. the target site).'
		},
		bodySiteReference: {
			type: require('./reference.schema'),
			description: 'Indicates the site on the subject\'s body where the device was used ( i.e. the target site).'
		},
		whenUsed: {
			type: require('./period.schema'),
			description: 'The time period over which the device was used.'
		},
		device: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The details of the device used.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'An external identifier for this statement such as an IRI.'
		},
		indication: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Reason or justification for the use of the device.'
		},
		notes: {
			type: new GraphQLList(GraphQLString),
			description: 'Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.'
		},
		_notes: {
			type: require('./element.schema'),
			description: 'Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.'
		},
		recordedOn: {
			type: DateTimeScalar,
			description: 'The time at which the statement was made/recorded.'
		},
		_recordedOn: {
			type: require('./element.schema'),
			description: 'The time at which the statement was made/recorded.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient who used the device.'
		},
		timingTiming: {
			type: require('./timing.schema'),
			description: 'How often the device was used.'
		},
		timingPeriod: {
			type: require('./period.schema'),
			description: 'How often the device was used.'
		},
		timingDateTime: {
			type: DateTimeScalar,
			description: 'How often the device was used.'
		},
		_timingDateTime: {
			type: require('./element.schema'),
			description: 'How often the device was used.'
		}
	})
});
