const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Consent.policy Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConsentPolicy_Input',
	description: 'The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		authority: {
			type: UriScalar,
			description: 'Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.'
		},
		_authority: {
			type: require('./element.input'),
			description: 'Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.'
		},
		uri: {
			type: UriScalar,
			description: 'The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.'
		},
		_uri: {
			type: require('./element.input'),
			description: 'The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.'
		}
	})
});
