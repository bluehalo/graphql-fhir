const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ClaimResponseaddItem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseaddItem_Input',
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
		_sequenceLinkId: {
			type: require('./element.input.js'),
			description:
				'List of input service items which this service line is intended to replace.',
		},
		sequenceLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description:
				'List of input service items which this service line is intended to replace.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ex-revenue-center
		revenue: {
			type: require('./codeableconcept.input.js'),
			description:
				'The type of reveneu or cost center providing the product and/or service.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		category: {
			type: require('./codeableconcept.input.js'),
			description:
				'Health Care Service Type Codes  to identify the classification of service or benefits.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: require('./codeableconcept.input.js'),
			description:
				'A code to indicate the Professional Service or Product supplied.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-modifiers
		modifier: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.',
		},
		fee: {
			type: require('./money.input.js'),
			description: 'The fee charged for the professional service or product..',
		},
		_noteNumber: {
			type: require('./element.input.js'),
			description: 'A list of note references to the notes provided below.',
		},
		noteNumber: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'A list of note references to the notes provided below.',
		},
		detail: {
			type: new GraphQLList(require('./claimresponseadditemdetail.input.js')),
			description:
				'The second tier service adjudications for payor added services.',
		},
	}),
});
