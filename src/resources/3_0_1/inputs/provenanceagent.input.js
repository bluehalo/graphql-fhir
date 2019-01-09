const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Provenanceagent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Provenanceagent_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-role-type
		role: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The function of the agent with respect to the activity. The security role enabling the agent with respect to the activity.',
		},
		_whoUri: {
			type: require('./element.input.js'),
			description:
				'The individual, device or organization that participated in the event.',
		},
		whoUri: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'The individual, device or organization that participated in the event.',
		},
		whoReference: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The individual, device or organization that participated in the event.',
		},
		_onBehalfOfUri: {
			type: require('./element.input.js'),
			description:
				'The individual, device, or organization for whom the change was made.',
		},
		onBehalfOfUri: {
			type: UriScalar,
			description:
				'The individual, device, or organization for whom the change was made.',
		},
		onBehalfOfReference: {
			type: GraphQLString,
			description:
				'The individual, device, or organization for whom the change was made.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-RoleLinkType
		relatedAgentType: {
			type: require('./codeableconcept.input.js'),
			description: 'The type of relationship between agents.',
		},
	}),
});
