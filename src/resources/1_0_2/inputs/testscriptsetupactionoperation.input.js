const CodeScalar = require('../scalars/code.scalar');
const IdScalar = require('../scalars/id.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TestScript.setup.action.operation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestScriptSetupActionOperation_Input',
	description: 'The operation to perform.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/testscript-operation-codes
		type: {
			type: require('./coding.input'),
			description: 'Server interaction or operation type.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		resource: {
			type: CodeScalar,
			description: 'The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.'
		},
		_resource: {
			type: require('./element.input'),
			description: 'The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.'
		},
		label: {
			type: GraphQLString,
			description: 'The label would be used for tracking/logging purposes by test engines.'
		},
		_label: {
			type: require('./element.input'),
			description: 'The label would be used for tracking/logging purposes by test engines.'
		},
		description: {
			type: GraphQLString,
			description: 'The description would be used by test engines for tracking and reporting purposes.'
		},
		_description: {
			type: require('./element.input'),
			description: 'The description would be used by test engines for tracking and reporting purposes.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/content-type
		accept: {
			type: CodeScalar,
			description: 'The content-type or mime-type to use for RESTful operation in the \'Accept\' header.'
		},
		_accept: {
			type: require('./element.input'),
			description: 'The content-type or mime-type to use for RESTful operation in the \'Accept\' header.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/content-type
		contentType: {
			type: CodeScalar,
			description: 'The content-type or mime-type to use for RESTful operation in the \'Content-Type\' header.'
		},
		_contentType: {
			type: require('./element.input'),
			description: 'The content-type or mime-type to use for RESTful operation in the \'Content-Type\' header.'
		},
		destination: {
			type: GraphQLInt,
			description: 'Which server to perform the operation on.'
		},
		_destination: {
			type: require('./element.input'),
			description: 'Which server to perform the operation on.'
		},
		encodeRequestUrl: {
			type: GraphQLBoolean,
			description: 'Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.'
		},
		_encodeRequestUrl: {
			type: require('./element.input'),
			description: 'Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.'
		},
		params: {
			type: GraphQLString,
			description: 'Path plus parameters after [type].  Used to set parts of the request URL explicitly.'
		},
		_params: {
			type: require('./element.input'),
			description: 'Path plus parameters after [type].  Used to set parts of the request URL explicitly.'
		},
		requestHeader: {
			type: new GraphQLList(require('./testscriptsetupactionoperationrequestheader.input')),
			description: 'Header elements would be used to set HTTP headers.'
		},
		responseId: {
			type: IdScalar,
			description: 'The fixture id (maybe new) to map to the response.'
		},
		_responseId: {
			type: require('./element.input'),
			description: 'The fixture id (maybe new) to map to the response.'
		},
		sourceId: {
			type: IdScalar,
			description: 'The id of the fixture used as the body of a PUT or POST request.'
		},
		_sourceId: {
			type: require('./element.input'),
			description: 'The id of the fixture used as the body of a PUT or POST request.'
		},
		targetId: {
			type: IdScalar,
			description: 'Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.'
		},
		_targetId: {
			type: require('./element.input'),
			description: 'Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.'
		},
		url: {
			type: GraphQLString,
			description: 'Complete request URL.'
		},
		_url: {
			type: require('./element.input'),
			description: 'Complete request URL.'
		}
	})
});
