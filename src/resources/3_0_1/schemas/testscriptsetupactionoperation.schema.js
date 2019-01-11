const {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary TestScriptsetupactionoperation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptsetupactionoperation',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/testscript-operation-codes
		type: {
			type: require('./coding.schema.js'),
			description: 'Server interaction or operation type.',
		},
		_resource: {
			type: require('./element.schema.js'),
			description:
				'The type of the resource.  See http://build.fhir.org/resourcelist.html.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		resource: {
			type: CodeScalar,
			description:
				'The type of the resource.  See http://build.fhir.org/resourcelist.html.',
		},
		_label: {
			type: require('./element.schema.js'),
			description:
				'The label would be used for tracking/logging purposes by test engines.',
		},
		label: {
			type: GraphQLString,
			description:
				'The label would be used for tracking/logging purposes by test engines.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'The description would be used by test engines for tracking and reporting purposes.',
		},
		description: {
			type: GraphQLString,
			description:
				'The description would be used by test engines for tracking and reporting purposes.',
		},
		_accept: {
			type: require('./element.schema.js'),
			description:
				"The content-type or mime-type to use for RESTful operation in the 'Accept' header.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/content-type
		accept: {
			type: CodeScalar,
			description:
				"The content-type or mime-type to use for RESTful operation in the 'Accept' header.",
		},
		_contentType: {
			type: require('./element.schema.js'),
			description:
				"The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/content-type
		contentType: {
			type: CodeScalar,
			description:
				"The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.",
		},
		_destination: {
			type: require('./element.schema.js'),
			description:
				'The server where the request message is destined for.  Must be one of the server numbers listed in TestScript.destination section.',
		},
		destination: {
			type: GraphQLInt,
			description:
				'The server where the request message is destined for.  Must be one of the server numbers listed in TestScript.destination section.',
		},
		_encodeRequestUrl: {
			type: require('./element.schema.js'),
			description:
				'Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.',
		},
		encodeRequestUrl: {
			type: GraphQLBoolean,
			description:
				'Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.',
		},
		_origin: {
			type: require('./element.schema.js'),
			description:
				'The server where the request message originates from.  Must be one of the server numbers listed in TestScript.origin section.',
		},
		origin: {
			type: GraphQLInt,
			description:
				'The server where the request message originates from.  Must be one of the server numbers listed in TestScript.origin section.',
		},
		_params: {
			type: require('./element.schema.js'),
			description:
				'Path plus parameters after [type].  Used to set parts of the request URL explicitly.',
		},
		params: {
			type: GraphQLString,
			description:
				'Path plus parameters after [type].  Used to set parts of the request URL explicitly.',
		},
		requestHeader: {
			type: new GraphQLList(
				require('./testscriptsetupactionoperationrequestheader.schema.js'),
			),
			description: 'Header elements would be used to set HTTP headers.',
		},
		_requestId: {
			type: require('./element.schema.js'),
			description: 'The fixture id (maybe new) to map to the request.',
		},
		requestId: {
			type: IdScalar,
			description: 'The fixture id (maybe new) to map to the request.',
		},
		_responseId: {
			type: require('./element.schema.js'),
			description: 'The fixture id (maybe new) to map to the response.',
		},
		responseId: {
			type: IdScalar,
			description: 'The fixture id (maybe new) to map to the response.',
		},
		_sourceId: {
			type: require('./element.schema.js'),
			description:
				'The id of the fixture used as the body of a PUT or POST request.',
		},
		sourceId: {
			type: IdScalar,
			description:
				'The id of the fixture used as the body of a PUT or POST request.',
		},
		_targetId: {
			type: require('./element.schema.js'),
			description:
				'Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.',
		},
		targetId: {
			type: IdScalar,
			description:
				'Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.',
		},
		_url: {
			type: require('./element.schema.js'),
			description: 'Complete request URL.',
		},
		url: {
			type: GraphQLString,
			description: 'Complete request URL.',
		},
	}),
});
