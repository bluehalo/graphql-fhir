const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ProvenanceEntity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProvenanceEntity_Input',
	description: 'An entity used in this activity.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/provenance-entity-role
		role: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How the entity was used during the activity.'
		},
		_role: {
			type: require('./element.input'),
			description: 'How the entity was used during the activity.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		type: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The type of the entity. If the entity is a resource, then this is a resource type.'
		},
		reference: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.'
		},
		_reference: {
			type: require('./element.input'),
			description: 'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.'
		},
		display: {
			type: GraphQLString,
			description: 'Human-readable description of the entity.'
		},
		_display: {
			type: require('./element.input'),
			description: 'Human-readable description of the entity.'
		}
	})
});
