const { GraphQLObjectType, GraphQLList, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PractitionerQualification Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PractitionerQualification',
	description: 'Qualifications obtained by training and certification.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'An identifier that applies to this person\'s qualification in this role.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/anzsco-occupations
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Coded representation of the qualification.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Period during which the qualification is valid.'
		},
		issuer: {
			type: require('./reference.schema'),
			description: 'Organization that regulates and issues the qualification.'
		}
	})
});
