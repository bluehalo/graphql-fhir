const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let DeviceRequestResourceType = new GraphQLEnumType({
	name: 'DeviceRequestResourceType',
	values: {
		DeviceRequest: { value: 'DeviceRequest' }
	}
});

/**
 * @name exports
 * @summary DeviceRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceRequest',
	description: 'Base StructureDefinition for DeviceRequest Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DeviceRequestResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifiers assigned to this order by the orderer or by the receiver.'
		},
		definition: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Protocol or definition followed by this request. For example: The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Plan/proposal/order fulfilled by this request.'
		},
		priorRequest: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The request takes the place of the referenced completed or terminated request(s).'
		},
		groupIdentifier: {
			type: require('./identifier.schema'),
			description: 'Composite request this is part of.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-status
		status: {
			type: CodeScalar,
			description: 'The status of the request.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the request.'
		},
		// ValueSetReference: http://build.fhir.org/valueset-request-intent.html
		intent: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Whether the request is a proposal, plan, an original order or a reflex order.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description: 'Indicates how quickly the {{title}} should be addressed with respect to other requests.'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'Indicates how quickly the {{title}} should be addressed with respect to other requests.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/device-kind
		codeReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The details of the device to be used.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/device-kind
		codeCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The details of the device to be used.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient who will use the device.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'An encounter that provides additional context in which this request is made.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		_occurrenceDateTime: {
			type: require('./element.schema'),
			description: 'The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		occurrencePeriod: {
			type: require('./period.schema'),
			description: 'The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		occurrenceTiming: {
			type: require('./timing.schema'),
			description: 'The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'When the request transitioned to being actionable.'
		},
		_authoredOn: {
			type: require('./element.schema'),
			description: 'When the request transitioned to being actionable.'
		},
		requester: {
			type: require('./devicerequestrequester.schema'),
			description: 'The individual who initiated the request and has responsibility for its activation.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		performerType: {
			type: require('./codeableconcept.schema'),
			description: 'Desired type of performer for doing the diagnostic testing.'
		},
		performer: {
			type: require('./reference.schema'),
			description: 'The desired perfomer for doing the diagnostic testing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Reason or justification for the use of this device.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Reason or justification for the use of this device.'
		},
		supportingInfo: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Additional clinical information about the patient that may influence the request fulfilment.  For example, this may includes body where on the subject\'s the device will be used ( i.e. the target site).'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.'
		},
		relevantHistory: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Key events in the history of the request.'
		}
	})
});
