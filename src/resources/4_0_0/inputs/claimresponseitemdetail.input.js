const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ClaimResponseitemdetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseitemdetail_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_detailSequence: {
			type: require('./element.input.js'),
			description: 'A number to uniquely reference the claim detail entry.',
		},
		detailSequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A number to uniquely reference the claim detail entry.',
		},
		_noteNumber: {
			type: require('./element.input.js'),
			description:
				'The numbers associated with notes below which apply to the adjudication of this item.',
		},
		noteNumber: {
			type: new GraphQLList(PositiveIntScalar),
			description:
				'The numbers associated with notes below which apply to the adjudication of this item.',
		},
		subDetail: {
			type: new GraphQLList(
				require('./claimresponseitemdetailsubdetail.input.js'),
			),
			description: 'A sub-detail adjudication of a simple product or service.',
		},
	}),
});
