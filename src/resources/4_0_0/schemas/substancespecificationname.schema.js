const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SubstanceSpecificationname Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceSpecificationname',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'The actual name.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The actual name.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'Name type.',
		},
		status: {
			type: require('./codeableconcept.schema.js'),
			description: 'The status of the name.',
		},
		_preferred: {
			type: require('./element.schema.js'),
			description: 'If this is the preferred name for this substance.',
		},
		preferred: {
			type: GraphQLBoolean,
			description: 'If this is the preferred name for this substance.',
		},
		language: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Language of the name.',
		},
		domain: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'The jurisdiction where this name applies.',
		},
		official: {
			type: new GraphQLList(
				require('./substancespecificationnameofficial.schema.js'),
			),
			description: 'Details of the official nature of this name.',
		},
		source: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'SubstanceSpecificationnamesource_source_Union',
					description: 'Supporting literature.',
					types: () => [require('./documentreference.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
					},
				}),
			),
			description: 'Supporting literature.',
		},
	}),
});
