const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let DeviceUseRequestResourceType = new GraphQLEnumType({
	name: 'DeviceUseRequestResourceType',
	values: {
		DeviceUseRequest: { value: 'DeviceUseRequest' }
	}
});

/**
 * @name exports
 * @summary DeviceUseRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceUseRequest',
	description: 'Base StructureDefinition for DeviceUseRequest Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DeviceUseRequestResourceType),
			description: 'Type of this resource.'
		},
		bodySiteCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates the site on the subject\'s body where the device should be used ( i.e. the target site).'
		},
		bodySiteReference: {
			type: require('./reference.schema'),
			description: 'Indicates the site on the subject\'s body where the device should be used ( i.e. the target site).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/device-use-request-status
		status: {
			type: CodeScalar,
			description: 'The status of the request.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the request.'
		},
		device: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The details of the device  to be used.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'An encounter that provides additional context in which this request is made.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifiers assigned to this order by the orderer or by the receiver.'
		},
		indication: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Reason or justification for the use of this device.'
		},
		notes: {
			type: new GraphQLList(GraphQLString),
			description: 'Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.'
		},
		_notes: {
			type: require('./element.schema'),
			description: 'Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.'
		},
		prnReason: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.'
		},
		orderedOn: {
			type: DateTimeScalar,
			description: 'The time when the request was made.'
		},
		_orderedOn: {
			type: require('./element.schema'),
			description: 'The time when the request was made.'
		},
		recordedOn: {
			type: DateTimeScalar,
			description: 'The time at which the request was made/recorded.'
		},
		_recordedOn: {
			type: require('./element.schema'),
			description: 'The time at which the request was made/recorded.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient who will use the device.'
		},
		timingTiming: {
			type: require('./timing.schema'),
			description: 'The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		timingPeriod: {
			type: require('./period.schema'),
			description: 'The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		timingDateTime: {
			type: DateTimeScalar,
			description: 'The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		_timingDateTime: {
			type: require('./element.schema'),
			description: 'The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/device-use-request-priority
		priority: {
			type: CodeScalar,
			description: 'Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.'
		}
	})
});
