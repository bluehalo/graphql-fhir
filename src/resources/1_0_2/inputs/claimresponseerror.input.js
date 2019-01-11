const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ClaimResponseerror Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseerror_Input',
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
				'The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.',
		},
		sequenceLinkId: {
			type: PositiveIntScalar,
			description:
				'The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.',
		},
		_detailSequenceLinkId: {
			type: require('./element.input.js'),
			description:
				'The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.',
		},
		detailSequenceLinkId: {
			type: PositiveIntScalar,
			description:
				'The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.',
		},
		_subdetailSequenceLinkId: {
			type: require('./element.input.js'),
			description:
				'The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.',
		},
		subdetailSequenceLinkId: {
			type: PositiveIntScalar,
			description:
				'The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/adjudication-error
		code: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description:
				'An error code,froma specified code system, which details why the claim could not be adjudicated.',
		},
	}),
});
