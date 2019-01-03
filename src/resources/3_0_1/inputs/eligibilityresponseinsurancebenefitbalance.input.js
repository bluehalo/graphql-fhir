const { GraphQLInputObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary EligibilityResponse.insurance.benefitBalance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EligibilityResponseInsuranceBenefitBalance_Input',
	description: 'Benefits and optionally current balances by Category.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-category
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Dental, Vision, Medical, Pharmacy, Rehab etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		subCategory: {
			type: require('./codeableconcept.input'),
			description: 'Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.'
		},
		excluded: {
			type: GraphQLBoolean,
			description: 'True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.'
		},
		_excluded: {
			type: require('./element.input'),
			description: 'True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.'
		},
		name: {
			type: GraphQLString,
			description: 'A short name or tag for the benefit, for example MED01, or DENT2.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A short name or tag for the benefit, for example MED01, or DENT2.'
		},
		description: {
			type: GraphQLString,
			description: 'A richer description of the benefit, for example \'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services\'.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A richer description of the benefit, for example \'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-network
		network: {
			type: require('./codeableconcept.input'),
			description: 'Network designation.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-unit
		unit: {
			type: require('./codeableconcept.input'),
			description: 'Unit designation: individual or family.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-term
		term: {
			type: require('./codeableconcept.input'),
			description: 'The term or period of the values such as \'maximum lifetime benefit\' or \'maximum annual vistis\'.'
		},
		financial: {
			type: new GraphQLList(require('./eligibilityresponseinsurancebenefitbalancefinancial.input')),
			description: 'Benefits Used to date.'
		}
	})
});
