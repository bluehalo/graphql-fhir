const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExplanationOfBenefitAccident Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitAccident_Input',
	description: 'An accident which resulted in the need for healthcare services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		date: {
			type: DateScalar,
			description: 'Date of an accident which these services are addressing.'
		},
		_date: {
			type: require('./element.input'),
			description: 'Date of an accident which these services are addressing.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActIncidentCode
		type: {
			type: require('./codeableconcept.input'),
			description: 'Type of accident: work, auto, etc.'
		},
		locationAddress: {
			type: require('./address.input'),
			description: 'Where the accident occurred.'
		},
		locationReference: {
			type: require('./reference.input'),
			description: 'Where the accident occurred.'
		}
	})
});
