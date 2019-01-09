const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary EligibilityResponseinsurancebenefitBalance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EligibilityResponseinsurancebenefitBalance',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-category
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'Dental, Vision, Medical, Pharmacy, Rehab etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		subCategory: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.',
		},
		_excluded: {
			type: require('./element.schema.js'),
			description:
				'True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.',
		},
		excluded: {
			type: GraphQLBoolean,
			description:
				'True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A short name or tag for the benefit, for example MED01, or DENT2.',
		},
		name: {
			type: GraphQLString,
			description:
				'A short name or tag for the benefit, for example MED01, or DENT2.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				"A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services'.",
		},
		description: {
			type: GraphQLString,
			description:
				"A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services'.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-network
		network: {
			type: require('./codeableconcept.schema.js'),
			description: 'Network designation.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-unit
		unit: {
			type: require('./codeableconcept.schema.js'),
			description: 'Unit designation: individual or family.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-term
		term: {
			type: require('./codeableconcept.schema.js'),
			description:
				"The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual vistis'.",
		},
		financial: {
			type: new GraphQLList(
				require('./eligibilityresponseinsurancebenefitbalancefinancial.schema.js'),
			),
			description: 'Benefits Used to date.',
		},
	}),
});
