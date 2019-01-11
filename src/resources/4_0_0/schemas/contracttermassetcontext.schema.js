const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Contracttermassetcontext Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Contracttermassetcontext',
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
		reference: {
			type: new GraphQLUnionType({
				name: 'Contracttermassetcontextreference_reference_Union',
				description:
					'Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.',
		},
		code: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.',
		},
		_text: {
			type: require('./element.schema.js'),
			description: 'Context description.',
		},
		text: {
			type: GraphQLString,
			description: 'Context description.',
		},
	}),
});
