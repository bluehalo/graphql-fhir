const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary SequenceRepository Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SequenceRepository_Input',
	description: 'Configurations of the external repository. The repository shall store target\'s observedSeq or records related with target\'s observedSeq.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/repository-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.'
		},
		url: {
			type: UriScalar,
			description: 'URI of an external repository which contains further details about the genetics data.'
		},
		_url: {
			type: require('./element.input'),
			description: 'URI of an external repository which contains further details about the genetics data.'
		},
		name: {
			type: GraphQLString,
			description: 'URI of an external repository which contains further details about the genetics data.'
		},
		_name: {
			type: require('./element.input'),
			description: 'URI of an external repository which contains further details about the genetics data.'
		},
		datasetId: {
			type: GraphQLString,
			description: 'Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.'
		},
		_datasetId: {
			type: require('./element.input'),
			description: 'Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.'
		},
		variantsetId: {
			type: GraphQLString,
			description: 'Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.'
		},
		_variantsetId: {
			type: require('./element.input'),
			description: 'Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.'
		},
		readsetId: {
			type: GraphQLString,
			description: 'Id of the read in this external repository.'
		},
		_readsetId: {
			type: require('./element.input'),
			description: 'Id of the read in this external repository.'
		}
	})
});
