const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Claim.accident Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimAccident',
	description: 'An accident which resulted in the need for healthcare services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		date: {
			type: new GraphQLNonNull(DateScalar),
			description: 'Date of an accident which these services are addressing.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'Date of an accident which these services are addressing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActIncidentCode
		type: {
			type: require('./codeableconcept.schema'),
			description: 'Type of accident: work, auto, etc.'
		},
		locationAddress: {
			type: require('./address.schema'),
			description: 'Accident Place.'
		},
		locationReference: {
			type: require('./reference.schema'),
			description: 'Accident Place.'
		}
	})
});
