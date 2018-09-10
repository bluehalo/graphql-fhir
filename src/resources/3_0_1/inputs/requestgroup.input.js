const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let RequestGroupResourceInputType = new GraphQLEnumType({
	name: 'RequestGroupResourceInputType',
	values: {
		RequestGroup: { value: 'RequestGroup' }
	}
});

/**
 * @name exports
 * @summary RequestGroup Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RequestGroup_Input',
	description: 'Base StructureDefinition for RequestGroup Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(RequestGroupResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Allows a service to provide a unique, business identifier for the request.'
		},
		definition: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A plan, proposal or order that is fulfilled in whole or in part by this request.'
		},
		replaces: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Completed or terminated request(s) whose function is taken by this new request.'
		},
		groupIdentifier: {
			type: require('./identifier.input'),
			description: 'A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the request. For request groups, the status reflects the status of all the requests in the group.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The current state of the request. For request groups, the status reflects the status of all the requests in the group.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-intent
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.'
		},
		_intent: {
			type: require('./element.input'),
			description: 'Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description: 'Indicates how quickly the request should be addressed with respect to other requests.'
		},
		_priority: {
			type: require('./element.input'),
			description: 'Indicates how quickly the request should be addressed with respect to other requests.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'The subject for which the request group was created.'
		},
		context: {
			type: require('./reference.input'),
			description: 'Describes the context of the request group, if any.'
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'Indicates when the request group was created.'
		},
		_authoredOn: {
			type: require('./element.input'),
			description: 'Indicates when the request group was created.'
		},
		author: {
			type: require('./reference.input'),
			description: 'Provides a reference to the author of the request group.'
		},
		reasonCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.'
		},
		reasonReference: {
			type: require('./reference.input'),
			description: 'Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Provides a mechanism to communicate additional information about the response.'
		},
		action: {
			type: new GraphQLList(require('./requestgroupaction.input')),
			description: 'The actions, if any, produced by the evaluation of the artifact.'
		}
	})
});
