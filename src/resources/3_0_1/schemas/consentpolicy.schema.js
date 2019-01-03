const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Consent.policy Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConsentPolicy',
	description: 'The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		authority: {
			type: UriScalar,
			description: 'Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.'
		},
		_authority: {
			type: require('./element.schema'),
			description: 'Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.'
		},
		uri: {
			type: UriScalar,
			description: 'The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.'
		},
		_uri: {
			type: require('./element.schema'),
			description: 'The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.'
		}
	})
});
