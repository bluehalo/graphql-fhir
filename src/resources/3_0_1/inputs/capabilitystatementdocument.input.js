const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary CapabilityStatementdocument Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatementdocument_Input',
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
		_mode: {
			type: require('./element.input.js'),
			description:
				'Mode of this document declaration - whether an application is a producer or consumer.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/document-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Mode of this document declaration - whether an application is a producer or consumer.',
		},
		_documentation: {
			type: require('./element.input.js'),
			description:
				'A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.',
		},
		documentation: {
			type: GraphQLString,
			description:
				'A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.',
		},
		profile: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A constraint on a resource used in the document.',
		},
	}),
});
