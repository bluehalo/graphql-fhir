const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SubstanceSpecificationname Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SubstanceSpecificationname_Input',
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
		_name: {
			type: require('./element.input.js'),
			description: 'The actual name.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The actual name.',
		},
		type: {
			type: require('./codeableconcept.input.js'),
			description: 'Name type.',
		},
		status: {
			type: require('./codeableconcept.input.js'),
			description: 'The status of the name.',
		},
		_preferred: {
			type: require('./element.input.js'),
			description: 'If this is the preferred name for this substance.',
		},
		preferred: {
			type: GraphQLBoolean,
			description: 'If this is the preferred name for this substance.',
		},
		language: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Language of the name.',
		},
		domain: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'The jurisdiction where this name applies.',
		},
		official: {
			type: new GraphQLList(
				require('./substancespecificationnameofficial.input.js'),
			),
			description: 'Details of the official nature of this name.',
		},
		source: {
			type: new GraphQLList(GraphQLString),
			description: 'Supporting literature.',
		},
	}),
});
