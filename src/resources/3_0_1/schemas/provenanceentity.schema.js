const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ProvenanceEntity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProvenanceEntity',
	description: 'An entity used in this activity.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/provenance-entity-role
		role: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How the entity was used during the activity.'
		},
		_role: {
			type: require('./element.schema'),
			description: 'How the entity was used during the activity.'
		},
		whatUri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.'
		},
		_whatUri: {
			type: require('./element.schema'),
			description: 'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.'
		},
		whatReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.'
		},
		whatIdentifier: {
			type: new GraphQLNonNull(require('./identifier.schema')),
			description: 'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.'
		}
	})
});
