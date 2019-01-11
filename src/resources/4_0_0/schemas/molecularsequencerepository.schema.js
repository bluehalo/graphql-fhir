const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary MolecularSequencerepository Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MolecularSequencerepository',
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
		_type: {
			type: require('./element.schema.js'),
			description:
				'Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'URI of an external repository which contains further details about the genetics data.',
		},
		url: {
			type: UriScalar,
			description:
				'URI of an external repository which contains further details about the genetics data.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'URI of an external repository which contains further details about the genetics data.',
		},
		name: {
			type: GraphQLString,
			description:
				'URI of an external repository which contains further details about the genetics data.',
		},
		_datasetId: {
			type: require('./element.schema.js'),
			description:
				'Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.',
		},
		datasetId: {
			type: GraphQLString,
			description:
				'Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.',
		},
		_variantsetId: {
			type: require('./element.schema.js'),
			description:
				'Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.',
		},
		variantsetId: {
			type: GraphQLString,
			description:
				'Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.',
		},
		_readsetId: {
			type: require('./element.schema.js'),
			description: 'Id of the read in this external repository.',
		},
		readsetId: {
			type: GraphQLString,
			description: 'Id of the read in this external repository.',
		},
	}),
});
