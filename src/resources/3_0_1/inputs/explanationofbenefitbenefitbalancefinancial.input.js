const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitbenefitBalancefinancial Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefitbenefitBalancefinancial_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-type
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'Deductable, visits, benefit amount.',
		},
		_allowedUnsignedInt: {
			type: require('./element.input.js'),
			description: 'Benefits allowed.',
		},
		allowedUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'Benefits allowed.',
		},
		_allowedString: {
			type: require('./element.input.js'),
			description: 'Benefits allowed.',
		},
		allowedString: {
			type: GraphQLString,
			description: 'Benefits allowed.',
		},
		allowedMoney: {
			type: require('./money.input.js'),
			description: 'Benefits allowed.',
		},
		_usedUnsignedInt: {
			type: require('./element.input.js'),
			description: 'Benefits used.',
		},
		usedUnsignedInt: {
			type: UnsignedIntScalar,
			description: 'Benefits used.',
		},
		usedMoney: {
			type: require('./money.input.js'),
			description: 'Benefits used.',
		},
	}),
});
