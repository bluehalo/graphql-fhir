const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary SpecimenDefinitiontypeTestedcontainer Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SpecimenDefinitiontypeTestedcontainer',
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
		material: {
			type: require('./codeableconcept.schema.js'),
			description: 'The type of material of the container.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of container used to contain this kind of specimen.',
		},
		cap: {
			type: require('./codeableconcept.schema.js'),
			description: 'Color of container cap.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'The textual description of the kind of container.',
		},
		description: {
			type: GraphQLString,
			description: 'The textual description of the kind of container.',
		},
		capacity: {
			type: require('./quantity.schema.js'),
			description:
				'The capacity (volume or other measure) of this kind of container.',
		},
		minimumVolumeQuantity: {
			type: require('./quantity.schema.js'),
			description: 'The minimum volume to be conditioned in the container.',
		},
		_minimumVolumeString: {
			type: require('./element.schema.js'),
			description: 'The minimum volume to be conditioned in the container.',
		},
		minimumVolumeString: {
			type: GraphQLString,
			description: 'The minimum volume to be conditioned in the container.',
		},
		additive: {
			type: new GraphQLList(
				require('./specimendefinitiontypetestedcontaineradditive.schema.js'),
			),
			description:
				'Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.',
		},
		_preparation: {
			type: require('./element.schema.js'),
			description:
				'Special processing that should be applied to the container for this kind of specimen.',
		},
		preparation: {
			type: GraphQLString,
			description:
				'Special processing that should be applied to the container for this kind of specimen.',
		},
	}),
});
