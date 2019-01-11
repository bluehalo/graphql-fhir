const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary TerminologyCapabilitiescodeSystem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TerminologyCapabilitiescodeSystem_Input',
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
		_uri: {
			type: require('./element.input.js'),
			description: 'URI for the Code System.',
		},
		uri: {
			type: CanonicalScalar,
			description: 'URI for the Code System.',
		},
		version: {
			type: new GraphQLList(
				require('./terminologycapabilitiescodesystemversion.input.js'),
			),
			description:
				'For the code system, a list of versions that are supported by the server.',
		},
		_subsumption: {
			type: require('./element.input.js'),
			description:
				'True if subsumption is supported for this version of the code system.',
		},
		subsumption: {
			type: GraphQLBoolean,
			description:
				'True if subsumption is supported for this version of the code system.',
		},
	}),
});
