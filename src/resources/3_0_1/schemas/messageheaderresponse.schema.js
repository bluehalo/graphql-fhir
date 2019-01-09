const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary MessageHeaderresponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageHeaderresponse',
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
		_identifier: {
			type: require('./element.schema.js'),
			description:
				'The MessageHeader.id of the message to which this message is a response.',
		},
		identifier: {
			type: new GraphQLNonNull(IdScalar),
			description:
				'The MessageHeader.id of the message to which this message is a response.',
		},
		_code: {
			type: require('./element.schema.js'),
			description:
				'Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/response-code
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.',
		},
		details: {
			type: new GraphQLUnionType({
				name: 'MessageHeaderresponsedetails_details_Union',
				description: 'Full details of any issues found in the message.',
				types: () => [require('./operationoutcome.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'OperationOutcome') {
						return require('./operationoutcome.schema.js');
					}
				},
			}),
			description: 'Full details of any issues found in the message.',
		},
	}),
});
