const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ProcessRequestResourceType = new GraphQLEnumType({
	name: 'ProcessRequestResourceType',
	values: {
		ProcessRequest: { value: 'ProcessRequest' }
	}
});

/**
 * @name exports
 * @summary ProcessRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcessRequest',
	description: 'Base StructureDefinition for ProcessRequest Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ProcessRequestResourceType),
			description: 'Type of this resource.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/actionlist
		action: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.'
		},
		_action: {
			type: require('./element.schema'),
			description: 'The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The ProcessRequest business identifier.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.schema'),
			description: 'The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.schema'),
			description: 'The style (standard) and version of the original material which was converted into this resource.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when this resource was created.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'The date when this resource was created.'
		},
		target: {
			type: require('./reference.schema'),
			description: 'The organization which is the target of the request.'
		},
		provider: {
			type: require('./reference.schema'),
			description: 'The practitioner who is responsible for the action specified in thise request.'
		},
		organization: {
			type: require('./reference.schema'),
			description: 'The organization which is responsible for the action speccified in thise request.'
		},
		request: {
			type: require('./reference.schema'),
			description: 'Reference of resource which is the target or subject of this action.'
		},
		response: {
			type: require('./reference.schema'),
			description: 'Reference of a prior response to resource which is the target or subject of this action.'
		},
		nullify: {
			type: GraphQLBoolean,
			description: 'If true remove all history excluding audit.'
		},
		_nullify: {
			type: require('./element.schema'),
			description: 'If true remove all history excluding audit.'
		},
		reference: {
			type: GraphQLString,
			description: 'A reference to supply which authenticates the process.'
		},
		_reference: {
			type: require('./element.schema'),
			description: 'A reference to supply which authenticates the process.'
		},
		item: {
			type: new GraphQLList(require('./processrequestitem.schema')),
			description: 'List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.'
		},
		include: {
			type: new GraphQLList(GraphQLString),
			description: 'Names of resource types to include.'
		},
		_include: {
			type: require('./element.schema'),
			description: 'Names of resource types to include.'
		},
		exclude: {
			type: new GraphQLList(GraphQLString),
			description: 'Names of resource types to exclude.'
		},
		_exclude: {
			type: require('./element.schema'),
			description: 'Names of resource types to exclude.'
		},
		period: {
			type: require('./period.schema'),
			description: 'A period of time during which the fulfilling resources would have been created.'
		}
	})
});
