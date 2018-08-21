const { GraphQLInputObjectType, GraphQLList, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PractitionerQualification Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PractitionerQualification_Input',
	description: 'Qualifications obtained by training and certification.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'An identifier that applies to this person\'s qualification in this role.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v2-2.7-0360
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Coded representation of the qualification.'
		},
		period: {
			type: require('./period.input'),
			description: 'Period during which the qualification is valid.'
		},
		issuer: {
			type: require('./reference.input'),
			description: 'Organization that regulates and issues the qualification.'
		}
	})
});
