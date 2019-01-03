const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let DeviceUseStatementResourceInputType = new GraphQLEnumType({
	name: 'DeviceUseStatementResourceInputType',
	values: {
		DeviceUseStatement: { value: 'DeviceUseStatement' },
	},
});

/**
 * @name exports
 * @summary DeviceUseStatement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DeviceUseStatement_Input',
	description: 'Base StructureDefinition for DeviceUseStatement Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(DeviceUseStatementResourceInputType),
				description: 'Type of this resource.',
			},
			bodySiteCodeableConcept: {
				type: require('./codeableconcept.input'),
				description:
					"Indicates the site on the subject's body where the device was used ( i.e. the target site).",
			},
			bodySiteReference: {
				type: require('./reference.input'),
				description:
					"Indicates the site on the subject's body where the device was used ( i.e. the target site).",
			},
			whenUsed: {
				type: require('./period.input'),
				description: 'The time period over which the device was used.',
			},
			device: {
				type: new GraphQLNonNull(require('./reference.input')),
				description: 'The details of the device used.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.input')),
				description:
					'An external identifier for this statement such as an IRI.',
			},
			indication: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description: 'Reason or justification for the use of the device.',
			},
			notes: {
				type: new GraphQLList(GraphQLString),
				description:
					'Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.',
			},
			_notes: {
				type: require('./element.input'),
				description:
					'Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.',
			},
			recordedOn: {
				type: DateTimeScalar,
				description: 'The time at which the statement was made/recorded.',
			},
			_recordedOn: {
				type: require('./element.input'),
				description: 'The time at which the statement was made/recorded.',
			},
			subject: {
				type: new GraphQLNonNull(require('./reference.input')),
				description: 'The patient who used the device.',
			},
			timingTiming: {
				type: require('./timing.input'),
				description: 'How often the device was used.',
			},
			timingPeriod: {
				type: require('./period.input'),
				description: 'How often the device was used.',
			},
			timingDateTime: {
				type: DateTimeScalar,
				description: 'How often the device was used.',
			},
			_timingDateTime: {
				type: require('./element.input'),
				description: 'How often the device was used.',
			},
		}),
});
