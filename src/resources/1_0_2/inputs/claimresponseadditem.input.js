const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
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
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description:
				'A code to indicate the Professional Service or Product supplied.',
		},
		fee: {
			type: require('./quantity.input.js'),
			description: 'The fee charged for the professional service or product..',
		},
		_noteNumberLinkId: {
			type: require('./element.input.js'),
			description: 'A list of note references to the notes provided below.',
		},
		noteNumberLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'A list of note references to the notes provided below.',
		},
		adjudication: {
			type: new GraphQLList(
				require('./claimresponseadditemadjudication.input.js'),
			),
			description: 'The adjudications results.',
		},
		detail: {
			type: new GraphQLList(require('./claimresponseadditemdetail.input.js')),
			description:
				'The second tier service adjudications for payor added services.',
		},
	}),
});
