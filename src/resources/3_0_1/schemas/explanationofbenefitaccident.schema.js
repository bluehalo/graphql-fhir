const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExplanationOfBenefitAccident Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitAccident',
	description: 'An accident which resulted in the need for healthcare services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		date: {
			type: DateScalar,
			description: 'Date of an accident which these services are addressing.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'Date of an accident which these services are addressing.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActIncidentCode
		type: {
			type: require('./codeableconcept.schema'),
			description: 'Type of accident: work, auto, etc.'
		},
		locationAddress: {
			type: require('./address.schema'),
			description: 'Where the accident occurred.'
		},
		locationReference: {
			type: require('./reference.schema'),
			description: 'Where the accident occurred.'
		}
	})
});
