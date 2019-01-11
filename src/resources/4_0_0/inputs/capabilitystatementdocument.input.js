const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

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
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_mode: {
			type: require('./element.input.js'),
			description:
				'Mode of this document declaration - whether an application is a producer or consumer.',
		},
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
		_profile: {
			type: require('./element.input.js'),
			description:
				'A profile on the document Bundle that constrains which resources are present, and their contents.',
		},
		profile: {
			type: new GraphQLNonNull(CanonicalScalar),
			description:
				'A profile on the document Bundle that constrains which resources are present, and their contents.',
		},
	}),
});
