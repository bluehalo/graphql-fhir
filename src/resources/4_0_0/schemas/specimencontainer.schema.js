const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Specimencontainer Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Specimencontainer',
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
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				"Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.",
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'Textual description of the container.',
		},
		description: {
			type: GraphQLString,
			description: 'Textual description of the container.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of container associated with the specimen (e.g. slide, aliquot, etc.).',
		},
		capacity: {
			type: require('./quantity.schema.js'),
			description:
				'The capacity (volume or other measure) the container may contain.',
		},
		specimenQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.',
		},
		additiveCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.',
		},
		additiveReference: {
			type: new GraphQLUnionType({
				name: 'SpecimencontaineradditiveReference_additiveReference_Union',
				description:
					'Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.',
				types: () => [require('./substance.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Substance') {
						return require('./substance.schema.js');
					}
				},
			}),
			description:
				'Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.',
		},
	}),
});
